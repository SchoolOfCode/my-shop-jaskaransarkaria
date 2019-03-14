import React from "react";
import Heading from "../Heading";

class BuyNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/Leicester/congratulations`);
  };
  render() {
    return (
      <div>
        <Heading>BuyNow</Heading>
        <button className="button" onClick={this.handleSubmit}>
          Buy Now
        </button>
      </div>
    );
  }
}

export default BuyNow;
