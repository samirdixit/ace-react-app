import React from "react";
import ReactDOM from "react-dom";

import styles from "./index.css";

function Dashboard() {
  return <div className={styles.mainSection}>Welcome to my ACE React app!</div>;
}

window.addEventListener("load", () => {
  const wrapper = document.getElementById("container");

  ReactDOM.render(<Dashboard />, wrapper);
});
