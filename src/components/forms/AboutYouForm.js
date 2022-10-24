import React from "react"
import Button from "../layout/Button";

const AboutYouForm = ({form=true}) => {
    const inputs = (
        <div className="form-content">
            <h1>About You</h1>
            <span>First Name *</span><br />
            <input name="firstName" type="text" autocomplete="given-name" required/> <br />
            <span>Last Name *</span> <br />
            <input name="lastName" type="text" autocomplete="family-name" required/> <br />
            <span>Email Address *</span> <br />
            <input name="email" type="email" autoComplete="email" required/> <br />
            <span>Phone Number *</span> <br />
            <input name="phone" type="tel" autoComplete="tel" required/> <br />
            <span>Address Line 1</span> <br />
            <input name="addressLine1" type="text" autoComplete="address-line1" required/> <br />
            <span>Address Line 2</span> <br />
            <input name="addressLine2" type="select" autoComplete="address-line2" required/> <br />
            <span>State</span> <br />
            <select name="state" id="states">
                <option value="Arizona">Arizona</option>
                <option value="Pennsylvania">Pennsylvania</option>
            </select> <br />
            <span>City</span> <br />
            <input name="city" type="text" required/> <br />
            <span>Zip Code</span> <br />
            <input name="addressLine2" type="text" autoComplete="address-line2" required/> <br />
        </div>
    );
    return form ? (<form  className="form" action="#">{inputs}</form>) : (inputs);
        
}
export default AboutYouForm;