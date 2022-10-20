import React from "react";
import {Link} from "react-router-dom";
import jumboImage from "../../img/jumbo.webp";
const Jumbotron = ({headline, text}) => {
    return (
        <section className="jumbo-main">
            {/* <img className="jumbo-main-img" src={jumboImage}></img> */}
            <div>
                <h3 className="jumbo-head-text">{headline}</h3>
            </div>
            <article className="jumbo-content">
                <p className="jumbo-content-text">{text}</p>
                <Link to="/contact-us">
                    <button className="bttn-large">Contact Us</button>
                </Link>
            </article>
        </section>
    )
}

export default Jumbotron;