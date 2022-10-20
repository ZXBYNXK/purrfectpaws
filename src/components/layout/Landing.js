// Landing page layout
import React from "react";
import Jumbotron from "./Jumbotron";
import defaults from "../../utils/defaults";
// import { Link, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
const Landing = () => {
  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <section className="landing">
      <Jumbotron headline={defaults.jumboHeadline} text={defaults.jumboText} />
      <h1>Landing</h1>
    </section>
  );
};

// const mstp = (state) => ({ isAuthenticated: state.auth.isAuthenticated});
// export default connect(mstp)(Landing);
export default Landing;