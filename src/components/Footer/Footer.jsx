import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "material-ui";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.row}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className="footer-link">
                About Us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className="footer-link">
                Become an Instructor
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className="footer-link">
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className="footer-link">
                Careers
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className="footer-link">
                Resources
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.row}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block}>
                &copy; {1900 + new Date().getYear()} - Elemento. All right reserved
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block}>
                Terms
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block}>
                Privacy Policy and Cookie Policy
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block}>
                Intellectual Property
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
