import React from "react";
import {Link} from "react-router-dom";
import Button from "./Button";
const Jumbotron = ({headline, text}) => {
    return (
        <section className="jumbo-main">
            {/* <img className="jumbo-main-img" src={jumboImage}></img> */}
            <div>
                <h1 className="jumbo-head-text">{headline}</h1>
            </div>
            <article className="jumbo-content">
                <p className="jumbo-content-text">{text}</p>
                <Link to="/contact-us">
                    <Button label="Contact Us"/>
                </Link>
            </article>
        </section>
    )
}

export default Jumbotron;