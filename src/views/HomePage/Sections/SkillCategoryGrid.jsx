import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import skillCategoryGridStyle from "assets/jss/material-kit-react/views/homepageSections/skillCategoryGridStyle.jsx";

//icons
import iconDevelopment from "assets/img/icons/big/development.png";
import iconSports from "assets/img/icons/big/sports.png";
import iconPersonal from "assets/img/icons/big/personal-development.png";
import iconDesign from "assets/img/icons/big/design.png";
import iconMarketing from "assets/img/icons/big/marketing.png";
import iconPhotography from "assets/img/icons/big/photography.png";
import iconHealth from "assets/img/icons/big/health.png";
import iconMusic from "assets/img/icons/big/music.png";
import iconScience from "assets/img/icons/big/science.png";
import iconLanguage from "assets/img/icons/big/language.png";
import iconProductivity from "assets/img/icons/big/productivity.png";
import iconTeacher from "assets/img/icons/big/teacher-learning.png";

class SkillCategoryGrid extends React.Component {
  render() {
    const { classes, title } = this.props;

    return (
      <div className="home-skill-category-grid-section">
        <div className={classes.container, classes.homeThreeCarouselContainer}>
          <div className="title">
            {title}
          </div>
          <GridContainer spacing={16} className={classes.gridWrapper}>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconDevelopment} />
                            <h3>Development</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconSports} />
                            <h3>Sports</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconPersonal} />
                            <h3>Personal Development</h3>
                        </div>
                    </div>
                </a>    
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconDesign} />
                            <h3>Design</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconMarketing} />
                            <h3>Marketing</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconPhotography} />
                            <h3>Photography</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconHealth} />
                            <h3>Health</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconMusic} />
                            <h3>Music</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconScience} />
                            <h3>Science</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconLanguage} />
                            <h3>Language</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconProductivity} />
                            <h3>Productivity</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} className={classes.gridItemWrapper}>
                <a href="#">
                    <div className="item-wrapper">
                        <div className="content-wrapper">
                            <img src={iconTeacher} />
                            <h3>Teacher Training</h3>
                        </div>
                    </div>
                </a>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(skillCategoryGridStyle)(SkillCategoryGrid);
