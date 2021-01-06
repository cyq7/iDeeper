import React from "react";

function Idea(props){
    return (
        <div class="note">
            <h1> {props.title} </h1>
            <p> {props.content}.</p>
        </div>
    )
}

export default Idea;