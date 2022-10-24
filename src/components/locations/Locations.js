import React from "react";
import defaults from "../../utils/defaults";
import Location from "./Location";
import { Link } from "react-router-dom";
const Locations = () => {
    return (
      <section className="locations">
        <div className="locations-head">
          <h1 className="locations-title">Service Locations</h1>
          <p>
          Check out the areas that we serve. Are you close to one? <Link to="/contact-us">Contact us anyway!</Link>
          </p>
        </div>
        {
          defaults.locations.map(location => (<Location {...location}/>))
        }
      </section>
    );
}

export default Locations;