const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { user } = require('../models');

function passwordsMatch(submittedPassword, storedPasswordHash){
    return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

// Following code run automatically in login time
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},
(email, password, done) => {
    user.findOne({ where: { email } })
        .then((userModel) => {
            if(!userModel) {
                console.log('\n\nFailed Login: user does not exit\n\n');
                return done(null, false, {message: 'Failed Login'});
            }

            if(passwordsMatch(password, userModel.passwordHash) === false) {
                console.log('\n\nFaiiled Login: passwords do not match\n\n');
                return done(null, false, {message: 'Failed Login'});
            }

            console.log('\n\nSuccessful Login\n\n');
            return done(null, userModel, {message: "Successfully Logged In!"});
        })
        .catch(err => {return done(err)});
})
);

passport.serializeUser((userModel, done) => {
    done(null, userModel.id);
});

passport.deserializeUser((id, done) => {
    user.findByPk(id)
        .then((userModel) => {
            if (!userModel) {
                done(null, false);
                return;
            }

            done(null, userModel);
            return;
        })
        .catch(err => done(err, null));
});

module.exports = passport;