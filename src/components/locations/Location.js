import React from "react";
const Location = ( ({state, contact, text}) => {
  return (
    <div className="location">
        <h1 className="location-title">{state}</h1>
        <a className="location-contact" href={"tel:" + contact.phone}>{contact.phone}</a>
        {
            text.map(str => (<p className="location-text">{str}</p>))
        }
    </div>
  )
});
export default Location;