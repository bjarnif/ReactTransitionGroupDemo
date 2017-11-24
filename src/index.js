import React from "react";
import { render } from "react-dom";
import Toggle from "./Toggle";

import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

const App = () => (
  <div style={styles}>
    <Toggle />
  </div>
);

render(<App />, document.getElementById("root"));
