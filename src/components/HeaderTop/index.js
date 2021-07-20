import React from "react";
import { Grid, Button, Hidden } from "@material-ui/core";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import "./style.scss";

const HeaderTop = (props) => {
  return (
    <Grid className={props.className}>
      <Grid
        container
        alignItems="center"
        className="container headerTopMainWrapper"
      >
        <Grid item sm={6} md={5} lg={5} xs={12}>
          <ul className="d-flex accountLoginArea">
            <li>
              <RoomOutlinedIcon /> Av. Fco. I. Madero y Aquiles Serdan #192 Esq.
            </li>
          </ul>
        </Grid>
        <Grid item sm={6} md={4} lg={5} xs={12}>
          <ul className="headerContact">
            <li>
              <PhoneOutlinedIcon /> 044 (638) 380-60-91
            </li>
            <li>
              <QueryBuilderOutlinedIcon /> 9AM - 9PM
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HeaderTop;
