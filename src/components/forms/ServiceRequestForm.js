import React from "react";

const ServiceRequestForm = ({form=true, handleChange, handleSelect, props}) => {
    
    const inputs = (            
        <div className="form-content">

            <h1>Service Request</h1>

            <span>Subject *</span> <br />
            <select 
                name="subject" 
                onChange={handleChange} 
                value={props.subject}
                required
            >
                <option value="">Select Subject</option>
                <option value="Pet Sitting or Dog Walking">Pet Sitting or Dog Walking</option>
                <option value="Pooper Scooper">Pooper Scooper</option>
                <option value="Doggy Daycare">Doggy Daycare</option>
                <option value="Boarding">Boarding</option>
                <option value="Pet Grooming">Pet Grooming</option>
                <option value="Pet Taxi">Pet Taxi</option>
                <option value="Billing Or Payment">Billing or Payment</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Other">Other</option>
            </select>
            <br />

            { props.search && props.petSitters.length > 0 ?
                (
                    <>
                        <span>Select Pet Sitters </span> <br />
                        <select 
                            name="selectedPetSitters" 
                            onChange={handleChange} 
                            value={Array(props.selectedPetSitters)}
                            className="pet-sitter-select-box"
                            multiple
                        >
                            {
                                props.petSitters.map(petSitter => (
                                    <option className="unselected pet-sitter-select" key={petSitter._id} value={`${petSitter.email}:${petSitter.firstName}`} onClick={handleSelect}>
                                        <img className="pet-sitter-avatar" src={petSitter.avatar}></img>
                                        <br /> {petSitter.firstName}
                                    </option>)
                                )
                            
                            }

                    </select>
                    <br />
                    </>
                ) : <></>

            }

            <span>Day of Service / Service Start Date</span> <br />
            <input 
                name="startDate" 
                type="date" 
                value={props.startDate} 
                onChange={handleChange}
            /> <br />

            <span>Day of Service / Service End Date</span> <br />
            <input 
                name="endDate" 
                type="date" 
                value={props.endDate} 
                onChange={handleChange} 
            /> <br />

            <span>Message / Comments</span><br />
            <textarea 
                name="message" 
                type="text" 
                value={props.message} 
                onChange={handleChange}
            ></textarea>

        </div>
);
    return form ? (
        <form className="form">
            {inputs}
        </form>
    ) : (inputs)
}

export default ServiceRequestForm;