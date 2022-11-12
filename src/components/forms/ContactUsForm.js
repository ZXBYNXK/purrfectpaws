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
    error: false,
    eMessage: "",
    search: false, 
    petSitters: [],
    selectedPetSitters: [],
    errors: [],


}


const ContactUsForm = () => {
    
    const [formData, setFormData] = useState(initialState);
    

    const handleSelect = (el) => {
        
        if (el.target.className === "unselected pet-sitter-select" && !formData.selectedPetSitters.includes(el.target.value)) {            
            el.target.className = "selected pet-sitter-select";
            setFormData({
                ...formData,
                selectedPetSitters: [...formData.selectedPetSitters, el.target.value]
            })
            
        } else {
            el.target.className = "unselected pet-sitter-select"
            setFormData({
                ...formData,
                selectedPetSitters: formData.selectedPetSitters.filter(petSitter => petSitter != el.target.value)
            })
        }


    }

    const handleChange = async (el) => {

        try {

            if (formData.phone.length > 1 && !formData.search && formData.locationState.length > 1) {

                let res = await api.post("pet-sitter-select", {locationState: formData.locationState, email: formData.email});
                // console.log("Response:  ", res.data);

                if (res.data) {
                    return setFormData({
                        ...formData,
                        search: true,
                        petSitters: res.data,

                    })
                }
    
            }

            if (el.target.name === "selectedPetSitters") {
                return setFormData({
                    ...formData,
                    selectedPetSitters: new Set([...formData.selectedPetSitters, e.target.value])
                })
            } else {
                return setFormData({
                    ...formData,
                    [el.target.name]: el.target.value,
                })
            }


        } catch (err) {
            // console.error(err);
            return setFormData({...formData, errors: err})

        }

    }
    
    const handleSubmit = async (el) => {
        el.preventDefault();
        try {

            let res = await api.post("contact-us", formData);

            setFormData({...initialState, submitted: true, ...res.data})

        } catch (err) {

            // console.error(err);

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
                    formData.submitted && formData.eMessage === "" ? 
                        (<h1>{"Submitting..."}</h1>) : (<h1>{formData.eMessage || ""}</h1>)
                }
                {
                    formData.error ? 
                        (<h1>{formData.eMessage || "Unknown error occured, please try again."}</h1>) : (<></>)
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
                handleSelect={handleSelect}
                props={formData} 
            />
            
            <Button label="Submit"/>
        
        </form>
    )
}

export default ContactUsForm;