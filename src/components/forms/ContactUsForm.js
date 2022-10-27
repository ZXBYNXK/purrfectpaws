import React, {useState} from "react";
import api from "../../utils/api";
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
    submitted: false,
    success: true,
    errors: {}

}


const ContactUsForm = () => {
    
    const [formData, setFormData] = useState(initialState);
    

    const handleChange = (el) => {
        setFormData({
            ...formData,
            [el.target.name]: el.target.value,
        })
    }
    
    const handleSubmit = async (el) => {
        el.preventDefault();
        try {
            setFormData({...initialState, submitted: true, success: true})
            let res = await api.post("/contact-us", formData);
            console.log(res.body);
        } catch (err) {
            console.error(err);
            setFormData({errors: err})
        }
    }

    return (
        <form 
            className="form" 
            onSubmit={handleSubmit} 
        >
            <div className={`alert-box ${formData.success ? "alert-success" : "alert-danger"}`}>
                {
                    formData.submitted ? 
                        (<h1>Form Sent.</h1>) : (<></>)
                }
            </div>
            <AboutYouForm 
                form={false} 
                handleChange={handleChange} 
                props={formData} 
            />
            
            <ServiceRequestForm 
                form={false} 
                handleChange={handleChange} 
                props={formData} 
            />
            
            <Button label="Submit"/>
        
        </form>
    )
}

export default ContactUsForm;