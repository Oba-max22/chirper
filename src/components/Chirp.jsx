import React from "react";

const Chirp = (props) => {
    return(
        <div className="item" >
            <h2 key={"user-" + props.id}>@{props.username}</h2>
            <p key={"text-" + props.id}>{props.text}</p>
            <p key={"date-" + props.id}>{props.datePosted}</p>
        </div> 
    );
}


export default Chirp;