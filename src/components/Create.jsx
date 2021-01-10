import React from "react";

function Create(props) {

    const [idea, setIdea] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setIdea(prevIdea => {
            return {
                ...prevIdea,
                [name]: value
            };
        });
    }

    function submitIdea(event) {
        props.onAdd(idea)
        setIdea( {
                title: "",
                content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={idea.title} name="title" placeholder="Title" />
                <textarea onChange={handleChange} value={idea.content} name="content" placeholder="Take a note..." rows="3" />
                <button onClick={submitIdea} >Add</button>
            </form>
        </div>
    );
}

export default Create;