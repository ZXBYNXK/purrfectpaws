import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "../services/Services";
import Locations from "../locations/Locations";
import ContactUs from "../contact-us/ContactUs";
const RouteSelection = (props) => {
    return (
            <Routes>
                <Route exact path="/services" element={Services} />
                <Route exact path="/locations/:state" element={Locations} />
                <Route exact path="/contact-us" element={ContactUs} />
            </Routes>
    )
}

export default RouteSelection;