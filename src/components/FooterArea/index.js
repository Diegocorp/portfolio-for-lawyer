import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/RS_logo.png";
import "./style.scss";
const footerLinks = [
  {
    title: "Menú",
    menus: [
      { name: "Team", route: "team" },
      { name: "Contact", route: "contact" },
    ],
  },
  {
    title: "Legal Specialty",
    menus: [
      { name: "Commercial Law" },
      { name: "Commercial contracts" },
      { name: "Civil Law" },
    ],
  },
  {
    title: "Contact us",
    menus: [
      { name: "Av. Fco. I. Madero y" },
      { name: "Aquiles Serdan #192 Esq.," },
      { name: "Puerto Peñasco, Sonora, México" },
      { name: "T. (638) 383-59-02" },
      { name: "Email: joaquinjaureguimercado@gmail.com" },
    ],
  },
];

const FooterArea = () => {
  return (
    <footer className="footerArea">
      <div className="footerTopArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footerLogo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
                <p>
                  More than 30 years of experience in commercial and civil law.
                </p>
              </div>
            </div>
            {footerLinks.map((menu, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className="footerWrap">
                  <h3>{menu.title}</h3>
                  <ul>
                    {menu.menus.map((item, i) => (
                      <li key={i}>
                        {item.route ? (
                          <Link to={`/${item.route}`}>{item.name}</Link>
                        ) : (
                          `${item.name}`
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footerBottomArea">
        <div className="container">
          <div className="footerBottomContent">
            <div className="row">
              <div className="col-md-8 col-sm-10 col-12">
                <span>
                  Privacy Policy | © 2019 Joaquin Jauregui. All Rights Reserved.
                </span>
              </div>
              <div className="col-md-4 col-sm-2 col-12">
                <ul className="socialListFooter">
                  <p>
                    Developed by{" "}
                    <b>
                      <a
                        href="https://www.diegosandoval.tech/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Diego Sandoval
                      </a>
                    </b>
                  </p>
                  <li>
                    <a href="https://github.com/Diegocorp?tab=overview&from=2021-05-01&to=2021-05-12">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/diego-sandoval-83856a212/">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterArea;
