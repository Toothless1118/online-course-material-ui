import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";

import becomeInstructorStyle from "assets/jss/material-kit-react/views/homepageSections/becomeInstructorStyle.jsx";


class BecomeInstructor extends React.Component {
  render() {
    const { classes, title, subtxt, link } = this.props;

    return (
      <div className="home-become-instructor-section">
        <div className={classes.container, classes.homeThreeCarouselContainer}>
          <div className="content-wrapper">
            <div className="title">
              {title}
            </div>
            <div className="sub-wrapper">
              {subtxt}
            </div>
            <Button
              className="load-more-btn orange-bg"
              color="transparent"
              size="lg"
              href="#"
              rel="noopener noreferrer"
            >
              Start Teaching Now
            </Button>
          </div>
        
        </div>
      </div>
    );
  }
}

export default withStyles(becomeInstructorStyle)(BecomeInstructor);
