import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

//user enter new journals

// function JournalForm(prop)
// {
//     return(
//         <div className="page-with-navbar">
//             <div>
//                 <Navbar/>
//             </div>
//             <div className="new-entry-page">
//                 <h1 className="headline-h1">New Entry</h1>
//                 <div className="new-entry-container">
//                     <div className="top-new-entry">
//                         <div className="left-new-entry">
//                             <input placeholder="Insert date here..." className="new-entry-header-input"></input>
//                             <input placeholder="Insert address here..." className="new-entry-header-input"></input>
//                         </div>
//                         <div className="right-new-entry">
//                             <p className="new-entry-image-p">Upload an image...</p>
//                             <input type="file" accept="image/png, image/jpeg"></input>
//                         </div>
//                     </div>
//                     <div className="bottom-new-entry">
//                         <textarea rows="20" cols="150" placeholder="Share your experience..." className="new-entry-content-textarea"></textarea>
//                     </div>
//                     <div className="submit-journal-button">
//                         <Link to="/view-entry"><button className="buttons">Submit</button></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

class JournalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            place: "",
            journaltext: "",
            photo: ""
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handleJournaltextChange = this.handleJournaltextChange.bind(this);
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
    }

    handleDateChange(event) {
        this.setState({date: event.target.value});
    }

    handlePlaceChange(event) {
        this.setState({place: event.target.value});
    }

    handleJournaltextChange(event) {
        this.setState({journaltext: event.target.value});
    }

    handlePhotoChange(event) {
        this.setState({img: event.target.files[0]});
    }

    changeState = () => {  
        this.setState({data: "hello test    "}); 
           }; 

    render() {
        return(
            <div className="page-with-navbar">
                <div>
                    <Navbar/>
                </div>
                <div className="new-entry-page">
                    <h1 className="headline-h1">New Entry</h1>
                    <form>
                        <div className="new-entry-container">
                            <div className="top-new-entry">
                                <div className="left-new-entry">
                                    <input value={this.state.date} onChange={this.handleDateChange} placeholder="Insert date here..." className="new-entry-header-input"></input>
                                    <input value={this.state.place} onChange={this.handlePlaceChange} placeholder="Insert name of place here..." className="new-entry-header-input"></input>
                                </div>
                                <div className="right-new-entry">
                                    <p className="new-entry-image-p">Upload an image...</p>
                                    <input onChange={this.handlePhotoChange} type="file" accept="image/png, image/jpeg"></input>
                                </div>
                            </div>
                            <div className="bottom-new-entry">
                                <textarea value={this.state.journaltext} onChange={this.handleJournaltextChange} rows="20" cols="150" placeholder="Share your experience..." className="new-entry-content-textarea"></textarea>
                            </div>
                            <div className="submit-journal-button">
                                {/* <Link to="/view-entry"><button className="buttons">Submit</button></Link> */}
                                <Link to='/view-entry' state={this.state.props} onClick={this.changeState}><button className="buttons">Submit</button></Link>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default JournalForm;