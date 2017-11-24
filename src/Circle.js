import React, { Component } from "react";
import { TweenLite } from "gsap";
import Transition from "react-transition-group/Transition";

const duration = 1000;

export default class Circle extends Component {
  onEnter = () => {
    console.log("onEnter circle");
  };
  onEntering = () => {
    console.log("onEntering circle");
  };
  onEntered = () => {
    console.log("onEntered circle");
  };
  onExit = () => {
    console.log("onExit circle");
  };
  onExiting = () => {
    console.log("onExiting circle");
  };
  onExited = () => {
    console.log("onExited circle");
  };

  endHandler = (n, done) => {
    console.log("endHandler circle");

    if (this.props.in) {
      console.log("endHandler circle coming in");

      setTimeout(() => {
        TweenLite.to(n, 1, {
          autoAlpha: 1,
          x: 0,
          scale: 0.7,
          ease: Back.easeOut,
          onComplete: done,
        });
      }, duration);
    } else {
      console.log("endHandler circle leaving");
      TweenLite.to(n, 1, {
        autoAlpha: 0,
        x: -500,
        onComplete: done,
      });
    }
  };

  render() {
    const { ...props } = this.props;

    return (
      <div className="circle">
        <Transition
          {...props}
          timeout={duration}
          mountOnEnter
          unmountOnExit
          onEnter={this.onEnter}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExit={this.onExit}
          onExiting={this.onExiting}
          onExited={this.onExited}
          addEndListener={this.endHandler}
        >
          <div
            className="circle-svg"
            ref={el => {
              this.circle = el;
            }}
          >
            <svg height="450px" width="450px" viewBox="0 0 450 450">
              <circle cx="224.5" cy="224.5" r="222.5" fill="#34C1FC" />
            </svg>
          </div>
        </Transition>
      </div>
    );
  }
}
