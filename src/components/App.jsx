import React from "react";
import Heading from "./Heading"
import Footer from "./Footer"
import Idea from "./Idea"
import ideas from "../ideas"

function App() {
    return <div>
        <Heading />
        {ideas.map(idea => (
             <Idea 
                 key = {idea.key}
                 title = {idea.title}
                 content = {idea.content}
            />
        ))}
        <Footer />
    </div>
};

export default App;