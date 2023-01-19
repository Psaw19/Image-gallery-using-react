import React from "react";
import "../Stylesheets/Card.css"

const Card = (props) => {
    return (
        <>
            <figure>
                <img src={props.image} alt="img" className="imgg" />
                <figcaption>Image 1</figcaption>
            </figure>
        </>
    );
}

export default Card;