import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron" >
            <div className="container">
                <h1 className="display-4">Kitten Clicky Game</h1>
                <p>Click on an image once to score points!</p>
                <p>{props.guess}</p>
                <p>Score: {props.score} | Top Score: {props.topScore}</p>
            </div>
        </div >
    )
}

export default Jumbotron;