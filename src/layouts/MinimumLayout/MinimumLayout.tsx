import React from "react";
import { makeStyles, Container, Theme } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const logo = require("../../assets/Logo.png");
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
  },
  logo: {
    width: "70%",
  },
}));

const Minimum = (props: any) => {
  const { children } = props;
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} alt="" />
      {children}
    </div>
  );
};

export default Minimum;
