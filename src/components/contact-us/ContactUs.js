import React from "react";
import AboutYouForm from "../forms/AboutYouForm";
import ContactUsForm from "../forms/ContactUsForm";
import ServiceRequestForm from "../forms/ServiceRequestForm";
import Button from "../layout/Button";
import Jumbotron from "../layout/Jumbotron";
const ContactUs = () => {
  const content = (
  <div className="conatact-us-jumbo-content">
    <h1>Contact Us</h1>
    <p className="conact-us-text">
      <a href="mailto:PurrfectPawsSetSitting@yahoo.com">PurrfectPawsSetSitting@yahoo.com</a>
      <br />
      <span>Arizona: <a href="tel:4803664472">(480) 366-4472</a></span>
      <br />
      <span>Pennsylvania: <a href="tel:4124004531">(412) 400-4531</a></span>
    </p>
  </div>
  );

    return (
        <section className="conact-us">
          <Jumbotron location="conact-us" button={false} content={content} />
          <div className="form-box">
           <ContactUsForm />
          </div>
        </section>
    );
}

export default ContactUs;