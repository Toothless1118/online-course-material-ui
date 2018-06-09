import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselThreeStyle.jsx";
import image1 from "assets/img/blink/201_130.png";
import linkIcon from "assets/img/icons/link-icon.png";
import CarouselItem from "./CarouselItem";

class SectionThreeCarousel extends React.Component {
  render() {
    const { classes, title } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className="three-carousel-title-wrapper">
            <div className="title">
              {title}
            </div>
          </div>
          <GridContainer className={classes.grid}>
            <GridItem xs={12} sm={12} md={12} className={classes.gritItem}>
              <Card carousel className={classes.card}>
                <Carousel {...settings} className="three-carousel">
                  <CarouselItem
                    image={image1}
                    username='Albert Einstein'
                    title='Introduction to theoretical physicist'
                    review_score={4.5}
                    review_count={3025}
                    hours={20}
                    price={30}
                    unit='$'
                    status='Top mentor'
                  />
                  <CarouselItem
                    image={image1}
                    username='Albert Einstein'
                    title='Introduction to theoretical physicist'
                    review_score={4.5}
                    review_count={3025}
                    hours={20}
                    price={30}
                    unit='$'
                    status='Top mentor'
                  />
                  <CarouselItem
                    image={image1}
                    username='Albert Einstein'
                    title='Introduction to theoretical physicist'
                    review_score={4.5}
                    review_count={3025}
                    hours={20}
                    price={30}
                    unit='$'
                    status='Top mentor'
                  />
                  <CarouselItem
                    image={image1}
                    username='Albert Einstein'
                    title='Introduction to theoretical physicist'
                    review_score={4.5}
                    review_count={3025}
                    hours={20}
                    price={30}
                    unit='$'
                    status='Top mentor'
                  />
                  <CarouselItem
                    image={image1}
                    username='Albert Einstein'
                    title='Introduction to theoretical physicist'
                    review_score={4.5}
                    review_count={3025}
                    hours={20}
                    price={30}
                    unit='$'
                    status='Top mentor'
                  />
                  <CarouselItem
                    image={image1}
                    username='Albert Einstein'
                    title='Introduction to theoretical physicist'
                    review_score={4.5}
                    review_count={3025}
                    hours={20}
                    price={30}
                    unit='$'
                    status='Top mentor'
                  />
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionThreeCarousel);
