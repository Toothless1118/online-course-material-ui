import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

// usps component
import Usps from "./Usps.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/uspsStyle.jsx";

//usps images
import usps1 from "assets/img/usps/loupe.png";
import usps2 from "assets/img/usps/enroll.png";
import usps3 from "assets/img/usps/smartphone.png";

class UspsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center" spacing={0} className={classes.grid}>
          <GridItem cs={12} sm={4} md={4} className="box-shadow">
            <Usps image={usps1} title="Explore" content="Over 90,000 courses taught by experts" />
          </GridItem>
          <GridItem cs={12} sm={4} md={4} className="box-shadow">
            <Usps image={usps2} title="Enroll" content="in courses at any time, with lifetime access" />
          </GridItem>
          <GridItem cs={12} sm={4} md={4} className="box-shadow">
            <Usps image={usps3} title="Learn" content="at your own pace, from any device" />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(UspsSection);
