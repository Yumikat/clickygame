import React from "react";
import "./style.css";

// var x = document.getElementById("kittenMeow");
// var audio = document.getElementById("kittenMeow");
// document.getElementById(".card").onmouseenter(function() {
//     audio.onplay();
// });

function CatCard(props) {
    // console.log(props);
    return (
            <div className="card">
                <div className="img-container">
                    <img src={props.image} alt={props.name} className="clickItem"
                        onClick={() => props.kittenClicked(props.id)} />
                </div>
            </div>
    )
}

export default CatCard;