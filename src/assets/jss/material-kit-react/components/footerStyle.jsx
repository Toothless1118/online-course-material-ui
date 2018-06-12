// ##############################
// // // Footer styles
// #############################

import { container, primaryColor } from "assets/jss/material-kit-react.jsx";

const footerStyle = {
  block: {
    color: "#F1F9F9",
    padding: "0.9375rem",
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "14px",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    opacity: 0.4
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  row: {
    padding: 0,
    display: "block"
  },
  footer: {
    padding: "30px 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    background: "#404F54"
  },
  a: {
    color: "#F1F9F9",
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;
