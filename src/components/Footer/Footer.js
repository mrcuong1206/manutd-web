/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import fbIcon from "../../assets/icon/bxl-facebook.svg";
import igIcon from "../../assets/icon/bxl-instagram.svg";
import twIcon from "../../assets/icon/bxl-twitter.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="sponsor">
          <div className="sponsor-items">
            <img
              src="http://cdn.shopify.com/s/files/1/0456/5070/6581/collections/Logo_Brand-02_1200x1200.png?v=1621918720"
              alt=""
            />
          </div>
          <div className="sponsor-items">
            <img
              src="https://ebaohiem.com/images/source/tin_tuc/Congty/bao-hiem-aon.png"
              alt=""
            />
          </div>
          <div className="sponsor-items">
            <img
              src="	https://www.kohler.com.vn/binaries/content/gallery/kohler/home/kohler-logo-261x146.png"
              alt=""
            />
          </div>
        </div>
        <div className="contact">
          <div className="contact-items">
            <Link to="https://www.facebook.com/mrcuong1808/" target="_blank">
              <img src={fbIcon} alt="" />
            </Link>
          </div>
          <div className="contact-items">
            <Link to="https://www.instagram.com/mrcuongf/" target="_blank">
              <img src={igIcon} alt="" />
            </Link>
          </div>
          <div className="contact-items">
            <Link to="https://twitter.com/reyC_126" target="_blank">
              <img src={twIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="reyc text-center  ">
          <p className="contact-name">ReyC</p>
          <p className="mail">mrmanhcuong126@gmail.com</p>
          <p className="phone">0337838201</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
