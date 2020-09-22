import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../logo2.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <p>Conditions of Use</p>
      <p>Privacy Notice</p>
      <p>Interest-Based Ads</p>
      <p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
    </div>
  );
};

export default Footer;
