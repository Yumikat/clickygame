import React from "react";
import "./style.css";

function CatCard(props) {
    console.log(props);
    return (
        <div className="card" style={{"width": 18}}>
            <div className="img-container">
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
}

export default CatCard;