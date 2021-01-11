import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Idea(props){

function handleClick() {
    props.onDelete(props.id)
}

    return (
        <div class="note">
            <h1> {props.title} </h1>
            <p> {props.content}</p>
            <button onClick={handleClick}>
            <DeleteIcon />
            </button>
        </div>
    )
}

export default Idea;