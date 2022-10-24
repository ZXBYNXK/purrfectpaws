import React from "react";
import {Link} from "react-router-dom";
import Button from "./Button";
const Jumbotron = ({headline, text, location="landing", button=true, content=false}) => {
    return (
        <section className={ location === "landing" ? "jumbo-main jumbo-main-landing": "jumbo-main jumbo-main-contact-us"}>
            {/* <img className="jumbo-main-img" src={jumboImage}></img> */}
            <div>
                <h1 className="jumbo-head-text">{headline}</h1>
            </div>
            <article className="jumbo-content">
                <p className="jumbo-content-text">{text}</p>
                {
                    button ? (
                    <Link to="/contact-us">
                        <Button label="Contact Us"/>
                    </Link>) : (<></>)
                }
                {
                    content ? (content) : (<></>)
                }
            </article>
        </section>
    )
}

export default Jumbotron;