import React from "react"

const AboutYouForm = ({form=true, handleChange, props}) => {
    
    const inputs = (
        <div className="form-content">
            <h1>About You</h1>
            
            <span>First Name *</span> <br />
            <input 
                name="firstName" 
                type="text" 
                autoComplete="given-name" 
                value={props.firstName} 
                onChange={handleChange}
                placeholder="Jane"
                required
            /> <br />
            
            <span>Last Name *</span> <br />
            <input
                name="lastName" 
                type="text" 
                autoComplete="family-name" 
                value={props.lastName} 
                onChange={handleChange}
                placeholder="Doe"
                required
            /> <br />
            
            <span>Email Address *</span> <br />
            <input 
                name="email" 
                type="email" 
                autoComplete="email" 
                value={props.email} 
                onChange={handleChange}
                placeholder="JaneDoe@email.com"
                required
            /> <br />
            
            <span>Phone Number *</span> <br />
            <input 
                name="phone" 
                type="tel" 
                autoComplete="tel" 
                value={props.phone} 
                onChange={handleChange}
                placeholder="(xxx)-xxx-xxxx"
                required
            /> <br />
            
            <span>Address Line 1</span> <br />
            <input 
                name="addressLine1" 
                type="text" 
                autoComplete="address-line1" 
                value={props.addressLine1} 
                onChange={handleChange}
                placeholder="123 State Ave"
                required
            /> <br />
            
            <span>Address Line 2</span> <br />
            <input 
                name="addressLine2"
                type="select" 
                autoComplete="address-line2" 
                value={props.addressLine2}
                placeholder="Apt #1 (Optional)"
                onChange={handleChange} 
            /> <br />
            
            <span>State</span> <br />
            <select 
                name="locationState" 
                id="state" 
                value={props.locationState} 
                onChange={handleChange}
                required
            >
                <option value="">Select State</option>
                <option value="Arizona">Arizona</option>
                <option value="Pennsylvania">Pennsylvania</option>
            </select> <br />
            
            <span>City</span> <br />
            <input 
                name="locationCity" 
                type="text" 
                value={props.locationCity}
                onChange={handleChange}
                placeholder="Phoenix/Pittsburgh"
                required
            /> <br />
            
            <span>Zip Code</span> <br />
            <input 
                name="locationZip" 
                type="text" 
                autoComplete="address-line2" 
                value={props.locationZip} 
                onChange={handleChange}
                placeholder="12345"
                required/> <br />
        </div>
    );

    return form ? (
        <form  
            className="form" 
            action="#"
        >
            {inputs}
        </form>
    ) : (
        inputs
    );
        
}
export default AboutYouForm;