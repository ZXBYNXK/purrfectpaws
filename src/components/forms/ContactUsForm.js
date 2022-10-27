import React, {useReducer, useState} from "react";
import Button from "../layout/Button";
import AboutYouForm from "./AboutYouForm";
import ServiceRequestForm from "./ServiceRequestForm";
const date = Date.now();
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '', 
    addressLine2: '',
    locationState: '',
    locationCity: '',
    locationZip: '',
    subject: '',
    startDate: date,
    endDate: date,
    message: '',

}


const ContactUsForm = () => {
    
    const [formData, setFormData] = useState(initialState);
    

    const handleChange = (el) => {
        setFormData({
            ...formData,
            [el.target.name]: el.target.value,
        })
    }
    
    const handleSubmit = (el) => {
        el.preventDefault();
        alert("Working...")
        // dispatch({
           // type: 'SUBMIT',
        // })
    }

    return (
        <form className="form" onSubmit={handleSubmit} >
            <AboutYouForm form={false} handleChange={handleChange} props={formData} />
            <ServiceRequestForm form={false} handleChange={handleChange} props={formData} />
            <Button label="Submit"/>
        </form>
    )
}

export default ContactUsForm;