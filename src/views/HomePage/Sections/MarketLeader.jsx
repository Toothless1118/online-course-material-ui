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
import marketLeaderStyle from "assets/jss/material-kit-react/views/homepageSections/marketLeaderStyle.jsx";

//icons
import iconMarketLeader1 from "assets/img/market/marketLeader1.png";
import iconMarketLeader2 from "assets/img/market/marketLeader2.png";
import iconMarketLeader3 from "assets/img/market/marketLeader3.png";
import iconMarketLeader4 from "assets/img/market/marketLeader4.png";
import iconMarketLeader5 from "assets/img/market/marketLeader5.png";


class MarketLeader extends React.Component {
  render() {
    const { classes, title } = this.props;

    return (
      <div className="home-market-leader-section">
        <div className={classes.container, classes.homeThreeCarouselContainer}>
          <div className="title">
            {title}
          </div>
          <GridContainer spacing={16} className={classes.gridWrapper}>
            <GridItem xs={6} sm={4}  className="grid-item">
                <div className="item-wrapper">
                    <div className="content-wrapper">
                        <img src={iconMarketLeader1} />
                    </div>
                </div>
            </GridItem>
            <GridItem xs={6} sm={4}  className="grid-item">
                <div className="item-wrapper">
                    <div className="content-wrapper">
                        <img src={iconMarketLeader2} />
                    </div>
                </div>
            </GridItem>
            <GridItem xs={6} sm={4}  className="grid-item">
                <div className="item-wrapper">
                    <div className="content-wrapper">
                        <img src={iconMarketLeader3} />
                    </div>
                </div>
            </GridItem>
            <GridItem xs={6} sm={4}  className="grid-item">
                <div className="item-wrapper">
                    <div className="content-wrapper">
                        <img src={iconMarketLeader4} />
                    </div>
                </div>
            </GridItem>
            <GridItem xs={6} sm={4}  className="grid-item">
                <div className="item-wrapper">
                    <div className="content-wrapper">
                        <img src={iconMarketLeader5} />
                    </div>
                </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(marketLeaderStyle)(MarketLeader);
