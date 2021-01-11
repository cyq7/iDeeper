import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function Create(props) {

    const [isExpanded, setExpanded] = React.useState(false);

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

    function handleExpand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} value={idea.title} name="title" placeholder="Title" />}
                <textarea onClick={handleExpand} onChange={handleChange} value={idea.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                <Fab onClick={submitIdea} >
                    <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default Create;