import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import Breadcumb from "../../../components/Breadcumb";
import FooterArea from "../../../components/FooterArea";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import HeaderT from "../../../components/HeaderTop";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";

import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Contact" }];

const ContactPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderT className="headerTop"></HeaderT>
        <Header className="headerBottomArea"></Header>
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="Contact"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />

      <div className="contactusPageArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contactUsInfo">
                <h3>Contact</h3>
                <p>
                  Our team is specialized in guiding and advising with order,
                  precision and personalized accompaniment in all the legal
                  services required.{" "}
                </p>
                <h4>Address</h4>
                <span>
                  Av. Fco. I. Madero y Aquiles Serdan #192 Esq., Puerto Peñasco,
                  Sonora, México.
                </span>
                <h4>Office phone</h4>
                <span>(638) 383-59-02</span>
                <h4>Cell phones</h4>
                <span>044 (638) 380-60-91</span>
                <span>044 (638) 105-88-41</span>
                <h4>Email</h4>
                <span>joaquinjaureguimercado@gmail.com</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contactUSForm">
                <h3>Contact Form</h3>
                <Form addressInfo={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterArea />
    </Fragment>
  );
};
export default ContactPage;
