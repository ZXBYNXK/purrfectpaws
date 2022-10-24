import React from "react";
import Button from "../layout/Button";
import AboutYouForm from "./AboutYouForm";
import ServiceRequestForm from "./ServiceRequestForm";

const ContactUsForm = () => {
    return (
        <form className="form">
            <AboutYouForm form={false} />
            <ServiceRequestForm form={false} />
            <Button label="Submit"/>
        </form>
    )
}

export default ContactUsForm;