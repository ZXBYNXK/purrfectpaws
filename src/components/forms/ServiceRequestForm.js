import React from "react";
const ServiceRequestForm = ({form=true}) => {
    const inputs = (            
        <div className="form-content">
            <h1>Service Request</h1>
            <span>Subject *</span> <br />
            <select name="subject">
                <option value="petSittingOrDogWalking">Pet Sitting or Dog Walking</option>
                <option value="pooperScooper">Pooper Scooper</option>
                <option value="doggyDaycare">Doggy Daycare</option>
                <option value="boarding">Boarding</option>
                <option value="petGrooming">Pet Grooming</option>
                <option value="petTaxi">Pet Taxi</option>
                <option value="billingOrPayment">Billing or Payment</option>
                <option value="generalInquiry">General Inquiry</option>
                <option value="other">Other</option>
            </select>
            <br />
            <span>Day of Service / Service Start Date</span> <br />
            <input name="serviceStartDate" type="date" /> <br />
            <span>Day of Service / Service End Date</span> <br />
            <input name="serviceEndDate" type="date" /> <br />
            <span>Message / Comments</span><br />
            <textarea name="message" type="text"></textarea>
        </div>
);
    return form ? (
        <form className="form">
            {inputs}
        </form>
    ) : (inputs)
}

export default ServiceRequestForm;