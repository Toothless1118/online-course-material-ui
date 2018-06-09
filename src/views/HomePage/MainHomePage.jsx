import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// material ui search bar
import SearchBar from "material-ui-search-bar";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import UspsSection from "./Sections/UspsSection.jsx";
import SectionFiveCarousel from "./Sections/SectionFiveCarousel.jsx";
import SectionThreeCarousel from "./Sections/SectionThreeCarousel.jsx";
import CarouselItem from "./Sections/CarouselItem.jsx";
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={require("assets/img/logo-white.png")}
          leftLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")} className="home-parallax">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} className="grid-center">
                <h1 className={classes.title}>Learn the skills you need</h1>
                <h4>
                  Take in-depth online courses and meet any challenge with skills.
                  From designing to creating full products.
                </h4>
                <br />
                <SearchBar
                  className="parallx-search"
                  onChange={() => console.log('onChange')}
                  onRequestSearch={() => console.log('onRequestSearch')}
                  placeholder="What do you want to learn"
                  searchIcon={
                    <Button
                      className="custom-trans-btn orange"
                      color="transparent"
                      size="sm"
                      href="#"
                      rel="noopener noreferrer"
                    >
                      Search
                    </Button>
                  }
                  style={{
                    margin: '0 auto',
                    maxWidth: 635,
                    height: 64,
                    width: '100%',
                    borderRadius: 32
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.upsRaised)}>
          <UspsSection />
        </div>
        <div className={classNames(classes.main)}>
          <SectionFiveCarousel category="Marketing"/>
          <SectionFiveCarousel category="Business"/>
          <div className="center-wrapper">
            <Button
              className="load-more-btn orange"
              color="transparent"
              size="lg"
              href="#"
              rel="noopener noreferrer"
            >
              Load More
            </Button>
          </div>
        </div>
        <div className={classNames(classes.main, classes.threeCarouselSection)}>
          <SectionThreeCarousel title="Discover our popular courses"/>
        </div>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(HomePage);
