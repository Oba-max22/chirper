import React from "react";

const Form = (props) => {
    return(
        <form className="left-container">
            <input onChange={props.handleUsername} value={props.username} placeholder = "Username" />
            <textarea onChange={props.handleMessageChange} value={props.text} placeholder = "Your thoughts ..." />
            <button className="btn-chirp" onClick={props.handleFormSubmission} >Chirp It</button>
        </form>
    );
}


export default Form;