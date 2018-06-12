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
import Card from "components/Card/Card.jsx";
import carouselThreeStyle from "assets/jss/material-kit-react/views/homepageSections/carouselThreeStyle.jsx";
import image1 from "assets/img/blink/519_333.png";

class SectionCarousel extends React.Component {
  render() {
    const { classes, title } = this.props;
    const settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div className="home-three-carousel-section">
        <div className={classes.container, classes.homeThreeCarouselContainer}>
          <div className={classes.titleWrapper}>
            {title}
          </div>
          <GridContainer spacing={16} className={classes.gridWrapper}>
            <GridItem xs={12} sm={12} md={8} className={classes.gridItemWrapper}>
              <Carousel {...settings}>
                <div className={classes.sliderWrapper}>
                  <img
                    src={image1}
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className={classes.slickCaption}>
                    <h4 className={classes.captionTitle}>
                      Finance
                    </h4>
                  </div>
                </div>
                <div className={classes.sliderWrapper}>
                  <img
                    src={image1}
                    alt="Second slide"
                    className="slick-image"
                  />
                 <div className={classes.slickCaption}>
                    <h4 className={classes.captionTitle}>
                      Business
                    </h4>
                  </div>
                </div>
                <div className={classes.sliderWrapper}>
                  <img
                    src={image1}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className={classes.slickCaption}>
                    <h4 className={classes.captionTitle}>
                      Entrepreneurship
                    </h4>
                  </div>
                </div>
                <div className={classes.sliderWrapper}>
                  <img
                    src={image1}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className={classes.slickCaption}>
                    <h4 className={classes.captionTitle}>
                      Finance1
                    </h4>
                  </div>
                </div>
                <div className={classes.sliderWrapper}>
                  <img
                    src={image1}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className={classes.slickCaption}>
                    <h4 className={classes.captionTitle}>
                      Business1
                    </h4>
                  </div>
                </div>
                <div className={classes.sliderWrapper}>
                  <img
                    src={image1}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className={classes.slickCaption}>
                    <h4 className={classes.captionTitle}>
                      Entrepreneurship
                    </h4>
                  </div>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselThreeStyle)(SectionCarousel);
