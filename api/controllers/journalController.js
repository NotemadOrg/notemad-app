const express = require("express");
const router = express.Router();
const db = require("../models");
const { journal } = db;

// // This is a simple example for providing basic CRUD routes for
// // a resource/model. It provides the following:
// //    GET    /api/micro_posts
// //    POST   /api/micro_posts
// //    GET    /api/micro_posts/:id
// //    PUT    /api/micro_posts/:id
// //    DELETE /api/micro_posts/:id
// //
// // The full URL's for these routes are composed by combining the
// // prefixes used to load the controller files.
// //    /api comes from the file ../app.js
// //    /micro_posts comes from the file ./microPosts.js

// /api/journal/
router.get("/", (req, res) => {
    journal.findAll({})
        .then(journalModel => res.json(journalModel));
});

router.post("/create", (req, res) => {
    let { journal_title, journal_body, journal_photo, has_visited } = req.body

    journal.create({journal_title, journal_body, journal_photo, has_visited})
        .then((newJournal) => {
            res.status(201).json(newJournal);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;