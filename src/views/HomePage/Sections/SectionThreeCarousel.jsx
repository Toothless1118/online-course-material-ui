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
    const { classes, category } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1299,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
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
      <div className={classes.section}>
        <div className={classes.container}>
          <div className="five-carousel-title-wrapper">
            <div className="title">
              Top courses in <span>{category}</span>
            </div>
            <div className="all-links">
              <Button
                className="featured-category-link-btn blue"
                color="transparent"
                size="sm"
                href="#"
                rel="noopener noreferrer"
              >
                See all<img src={linkIcon} />
              </Button>
            </div>
          </div>
          <GridContainer className={classes.grid}>
            <GridItem xs={12} sm={12} md={12} className={classes.gritItem}>
              <Card carousel className={classes.card}>
                <Carousel {...settings} className="five-carousel">
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
