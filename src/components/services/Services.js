import React from "react";
import defaults from "../../utils/defaults";
import Service from "./Service";
const Services = () => {
  let keys = 0;
    return (
      <section className="services">
        {
          defaults.servicesContent.map(content => <Service {...content} key={++keys}/>)
        }
      </section>
    );
}
export default Services;