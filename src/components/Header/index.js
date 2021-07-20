import React, { useState, Fragment } from "react";
import { Grid } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo/RS_logo.png";
import "./style.scss";

const HeaderBottom = (props) => {
  const [search, setSearch] = useState();
  const [responsive, setResponsive] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const clickHandler = () => {
    setTrigger(!trigger);
  };
  const responsiveHandler = () => {
    setResponsive(!responsive);
  };

  return (
    <Fragment>
      {trigger && <Grid className="backdrop" onClick={clickHandler}></Grid>}
      <Grid className={props.className}>
        <Grid container alignItems="center" next className="container">
          <Grid item md={3} sm={6} xs={8}>
            <Grid className="logo">
              <Link exact to="/">
                <a>
                  <img src={logo} alt="logo" href="/" />
                </a>
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            className={
              responsive ? "responsiveWrapper active" : "responsiveWrapper"
            }
          >
            <ul className="mainMenuWrap">
              <li>
                <Link href="/">
                  <a>
                    <NavLink exact to="/">
                      Home
                    </NavLink>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a>
                    <NavLink exact to="/team">
                      Team
                    </NavLink>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>
                    <NavLink exact to="/contact">
                      Contact
                    </NavLink>
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item md={1} sm={6} xs={4}>
            <Grid className="searchMenuWrapper">
              <Grid onClick={responsiveHandler} className="responsiveTrigger">
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default HeaderBottom;
