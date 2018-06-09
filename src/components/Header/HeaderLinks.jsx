/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";
import Hidden from "material-ui/Hidden";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// material ui search bar
import SearchBar from "material-ui-search-bar";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <GridContainer className="header-link-wrapper">
      <GridItem xs={12} sm={12} md={8}>
        <List className="nav-search">
          <ListItem className="dropdown-wrapper">
            <Hidden smDown implementation="css">
              <CustomDropdown
                buttonText="Category"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                buttonIcon={Apps}
                dropdownList={[
                  <Link to="/" className={classes.dropdownLink}>
                    All components
                  </Link>,
                  // eslint-disable-next-line
                  <a
                    href="http://creativetimofficial.github.io/material-kit-react/#/documentation"
                    target="_blank"
                    className={classes.dropdownLink}
                  >
                    Documentation
                  </a>
                ]}
              />
            </Hidden>
            
          </ListItem>
          <ListItem className="search-bar-wrapper">
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              placeholder="Search for courses"
              style={{
                margin: '0 auto',
                maxWidth: 800,
                height: '46px',
                width: '100%'
              }}
            />
          </ListItem>
        </List>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <List className='nav-links'>
          <ListItem className={classes.listItem}>
            <a href="#" className={classes.block} className="nav-instructor">
              Become an Instructor
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a href="#" className={classes.block}>
              Log in
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              className="custom-trans-btn"
              color="transparent"
              size="sm"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up
            </Button>
          </ListItem>
        </List>
      </GridItem>
    </GridContainer>
    
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
