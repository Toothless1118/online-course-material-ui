import React from "react";

// Star rating component
import StarRatingComponent from "react-star-rating-component";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/carouselItemStyle.jsx";

import iconUser from "assets/img/icons/icon-user.png";
import iconTime from "assets/img/icons/icon-time.png";
import ribbon from "assets/img/ribbon.png";

class CarouselItem extends React.Component {
    render() {
      const { image, username, title, review_score, review_count, hours, price, unit, status } = this.props;
      return (
        <div className="carousel-item-wrapper">
            <div className="img-wrapper">
                <img src={image} />
            </div>
            <div className="content-wrapper">
                <h5>{username}</h5>
                <h3>{title}</h3>
                <div className="ribbon">
                    <img src={ribbon} />
                    <span>{status}</span>
                </div>
                <StarRatingComponent 
                    name="reviewRate" 
                    starCount={5}
                    value={review_score}
                    onStarClick={console.log('click')}
                />
                <div className="content">
                    <div className="reviews">
                        <img src={iconUser} />
                        <span>{review_count}</span>
                    </div>
                    <div className="hours">
                        <img src={iconTime} />
                        <span>{hours}hours</span>
                    </div>
                </div>
                <div className="price">
                    {unit}{price}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default withStyles(workStyle)(CarouselItem);
  