import React, {useReducer} from "react"
import Button from "../layout/Button";

const AboutYouForm = ({form=true, handleChange, props}) => {
    
    const inputs = (
        <div className="form-content">
            <h1>About You</h1>
            <span>First Name *</span><br />
            <input name="firstName" type="text" autoComplete="given-name" value={props.firstName} onChange={handleChange} required/> <br />
            <span>Last Name *</span> <br />
            <input name="lastName" type="text" autoComplete="family-name" value={props.lastName} onChange={handleChange} required/> <br />
            <span>Email Address *</span> <br />
            <input name="email" type="email" autoComplete="email" value={props.email} onChange={handleChange} required/> <br />
            <span>Phone Number *</span> <br />
            <input name="phone" type="tel" autoComplete="tel" value={props.phone} onChange={handleChange} required/> <br />
            <span>Address Line 1</span> <br />
            <input name="addressLine1" type="text" autoComplete="address-line1" value={props.addressLine1} onChange={handleChange} required/> <br />
            <span>Address Line 2</span> <br />
            <input name="addressLine2" type="select" autoComplete="address-line2" value={props.addressLine2} onChange={handleChange} required/> <br />
            <span>State</span> <br />
            <select name="locationState" id="state" value={props.locationprops} onChange={handleChange}>
                <option value="Arizona">Arizona</option>
                <option value="Pennsylvania">Pennsylvania</option>
            </select> <br />
            <span>City</span> <br />
            <input name="locationCity" type="text" value={props.locationCity} onChange={handleChange} required/> <br />
            <span>Zip Code</span> <br />
            <input name="locationZip" type="text" autoComplete="address-line2" value={props.locationZip} onChange={handleChange} required/> <br />
        </div>
    );
    return form ? (<form  className="form" action="#">{inputs}</form>) : (inputs);
        
}
export default AboutYouForm;