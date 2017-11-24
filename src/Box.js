import React, { Component } from "react";
import { TweenLite } from "gsap";
import Transition from "react-transition-group/Transition";

const duration = 1000;

export default class Box extends Component {
  onEnter = () => {
    console.log("onEnter box");
  };
  onEntering = () => {
    console.log("onEntering box");
  };
  onEntered = () => {
    console.log("onEntered box");
  };
  onExit = () => {
    console.log("onExit box");
  };
  onExiting = () => {
    console.log("onExiting box");
  };
  onExited = () => {
    console.log("onExited box");
  };

  endHandler = (n, done) => {
    console.log("endHandler box");

    if (this.props.in) {
      console.log("endHandler box coming in");

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
      console.log("endHandler box leaving");
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
      <div className="box">
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
            className="box-svg"
            ref={el => {
              this.box = el;
            }}
          >
            <svg height="450px" width="450" viewBox="0 0 450 450">
              <path fill="#00CC76" d="M2.5 2.5h445v445H2.5z" />
            </svg>
          </div>
        </Transition>
      </div>
    );
  }
}
