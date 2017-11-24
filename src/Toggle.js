import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";

import Circle from "./Circle";
import Box from "./Box";

export default class TransitionGroups extends Component {
  state = {
    isVisible: false
  };

  toggleEnterState = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>TransitionGroup and Transition v2.2.1</h1>
        <h2>Animated with gsap</h2>
        <button onClick={this.toggleEnterState}>
          Toggle between box and circle
        </button>
        <div className="container">
          <TransitionGroup>
            {this.state.isVisible && <Circle />}
            {!this.state.isVisible && <Box />}

            {/*{this.state.isVisible ? <Box /> : <Circle />}*/}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
