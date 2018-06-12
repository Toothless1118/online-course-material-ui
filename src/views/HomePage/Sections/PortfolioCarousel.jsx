import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import portfolioCarouselStyle from "assets/jss/material-kit-react/views/homepageSections/portfolioCarouselStyle.jsx";
import image1 from "assets/img/blink/1100_700.png";
import quoteIcon from "assets/img/icons/big/icon-floting-orange.png";
import arrowLeftIcon from "assets/img/icons/big/icon-arrow-left-big-orange.png";

function CustomPrevArrow(props) {
    const { src, className, style, onClick } = props;
    return (
        <button
            className={className}
            style={style}
            onClick={onClick}
        >
            <img src={src} />
        </button>
    );
}
function CustomNexArrow(props) {
    const { src, className, style, onClick } = props;
    return (
        <button
            className={className}
            style={style}
            onClick={onClick}
        >
        </button>
    );
}

class PortfolioCarousel extends React.Component {
  
  render() {
    const { classes } = this.props;
    console.log('<img src="assets/img/icons/big/icon-arrow-left-big-orange.png"/>');
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: <CustomPrevArrow src={arrowLeftIcon} />,
      nextArrow: <CustomNexArrow />
    };
    return (
      <div className={classes.section}>
        <div className="home-portfolio-carousel-container">
          <GridContainer className={classes.grid}>
            <GridItem xs={12} sm={12} md={12} className={classes.gritItem}>
              <Carousel {...settings}>
                <div className="item-wrapper">
                  <div className="img-wrapper">
                    <img src={image1} />
                  </div>
                  <div className="content-wrapper">
                    <img src={quoteIcon} />
                    <div className="reivew-txt">
                      “I've used Elemento to learn dozens of new skills in online courses. If you are thinking of grow your mindset, Elemento is the place to be.”
                    </div>
                    <div className="username">
                      Katie Dall
                    </div>
                  </div>
                </div>
                <div className="item-wrapper">
                  <div className="img-wrapper">
                    <img src={image1} />
                  </div>
                  <div className="content-wrapper">
                    <img src={quoteIcon} />
                    <div className="reivew-txt">
                      “I've used Elemento to learn dozens of new skills in online courses. If you are thinking of grow your mindset, Elemento is the place to be.”
                    </div>
                    <div className="username">
                      Katie Dall
                    </div>
                  </div>
                </div>
                <div className="item-wrapper">
                  <div className="img-wrapper">
                    <img src={image1} />
                  </div>
                  <div className="content-wrapper">
                    <img src={quoteIcon} />
                    <div className="reivew-txt">
                      “I've used Elemento to learn dozens of new skills in online courses. If you are thinking of grow your mindset, Elemento is the place to be.”
                    </div>
                    <div className="username">
                      Katie Dall
                    </div>
                  </div>
                </div>
                <div className="item-wrapper">
                  <div className="img-wrapper">
                    <img src={image1} />
                  </div>
                  <div className="content-wrapper">
                    <img src={quoteIcon} />
                    <div className="reivew-txt">
                      “I've used Elemento to learn dozens of new skills in online courses. If you are thinking of grow your mindset, Elemento is the place to be.”
                    </div>
                    <div className="username">
                      Katie Dall
                    </div>
                  </div>
                </div>
                <div className="item-wrapper">
                  <div className="img-wrapper">
                    <img src={image1} />
                  </div>
                  <div className="content-wrapper">
                    <img src={quoteIcon} />
                    <div className="reivew-txt">
                      “I've used Elemento to learn dozens of new skills in online courses. If you are thinking of grow your mindset, Elemento is the place to be.”
                    </div>
                    <div className="username">
                      Katie Dall
                    </div>
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

export default withStyles(portfolioCarouselStyle)(PortfolioCarousel);
