import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/uspsStyle.jsx";

class Usps extends React.Component {
    render() {
      const { image, title, content } = this.props;
      return (
        <div className="usps-wrapper">
            <div className="img-wrapper">
                <img src={image} />
            </div>
            <div className="content-wrapper">
                <h3>{title}</h3>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default withStyles(workStyle)(Usps);
  