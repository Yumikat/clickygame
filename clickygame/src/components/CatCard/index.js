import React from "react";

function CatCard(props) {
    console.log(props);
    return (
        <div className="card" style={{"width": 18}}>
            <div className="img-container">
                <img src={props.url} className="card-img-top" alt={props.name} style={{ "height": 200, "width": 230 }} />
            </div>
        </div>
    )
}

export default CatCard;