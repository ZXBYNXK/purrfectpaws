import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Locations from './components/locations/Locations';
import Services from './components/services/Services';
import ContactUs from './components/contact-us/ContactUs';
import "./styles/styles.css"

const App = () => {
  
  const {pathname} = useLocation();
  useEffect(() => {
    let url = location.href.split("#")
    let id = url[1] ? url[1] : false;
    if (id) {
      let el = document.getElementById(id) 
      console.log(el)
      el.scrollIntoView();

    } else {
      window.scrollTo(0,0);
    }
  }, [pathname])
  
  return (
    <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Landing/>} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
      </Routes>
  );
}

export default App;
