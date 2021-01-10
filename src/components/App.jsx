import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Create from "./Create"
import Idea from "./Idea"

function App() {

const [ideas, setIdeas] = React.useState([]);

function addIdea(newIdea) {
    setIdeas(prevIdeas => {
      return [...prevIdeas, newIdea]
    })
}

function deleteIdea(id) {
    setIdeas(prevIdeas => {
        return prevIdeas.filter((idea, index) => {
            return index !== id;
        })
    })
}

    return <div>
        <Header />
        <Create 
            onAdd={addIdea}
        />
       { ideas.map((idea, index) => {
            return <Idea 
                key={index}
                id={index}
                title={idea.title}
                content={idea.content}
                onDelete={deleteIdea}
            />
        })}
        <Footer />
    </div>
};

export default App;