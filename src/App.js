import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Locations from './components/locations/Locations';
import Services from './components/services/Services';
import ContactUs from './components/contact-us/ContactUs';
import "./styles/styles.css"
function App() {
  return (
  <BrowserRouter>
    <Fragment>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Landing/>} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
      </Routes>
    </Fragment>
  </BrowserRouter>
  );
}

export default App;
