import React from "react";
import { Link } from "react-router-dom";
import netflixlogo from "./netflixlogo.jpg";   // ✅ ADD THIS LINE

export const Navbar = () => {
  return (
    <div style={styles.nav}>
      
      {/* Logo */}
      <img src={netflixlogo} alt="logo" style={styles.logo} />

      {/* Links */}
      <Link to="/" style={styles.link}>
        HOME
      </Link>

      <Link to="/netflixhome" style={styles.link}>
        MOVIE
      </Link>

      <Link to="/netflixMovie" style={styles.link}>
        TV SHOWS
      </Link>

    </div>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    background: "#0f0e0e",
    padding: "5px",
  },

  logo: {
    width: "190px",
    height: "120px",
    marginRight: "20px",
    
  },

  link: {
    color: "white",
    marginRight: "30px",
    fontSize: "20px",
   
    
  },

  
};
