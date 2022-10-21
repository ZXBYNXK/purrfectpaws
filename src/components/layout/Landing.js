// Landing page layout
import React from "react";
import Jumbotron from "./Jumbotron";
import defaults from "../../utils/defaults";

const Landing = () => {

  return (
    <section className="landing">
      
      <Jumbotron headline={defaults.jumboHeadline} text={defaults.jumboText} />

      <div className="mid">
        <p>
        Many people think that they are doing their pet favor by boarding them in a pet suite or pet spa. However, 
        some pets can suffer undue stress when their surroundings are changed. Bordetella shots do not prevent all strains of kennel cough,
        so even if your pet has been vaccinated, they could still be at risk. 
        <br />
        <br />
        Do your pet a real favor and hire a pet care professional to visit
        your home to care for them in their familiar, safe, and comfortable environment!
        </p>
      </div>

      <div className="box content-box">

        <div className="flex-full">
          <h1>Why Us?</h1>
          <p>
            A pet sitter is a friend for life! We are a team of pet care professionals that you can trust, 
            afford, and are fully insured!
          </p>
        </div>

        {defaults.landingContent.map((content) =>         
        <div className="content">
            <img className="content-img" src={content.image}></img>
            <h2>{content.title}</h2>
            <p className="content-text">{content.text}</p>
        </div>)}
      </div>
      {/* <h1>Landing</h1> */}
    </section>
  );
};

// const mstp = (state) => ({ isAuthenticated: state.auth.isAuthenticated});
// export default connect(mstp)(Landing);
export default Landing;