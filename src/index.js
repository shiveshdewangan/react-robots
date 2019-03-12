import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Card from "./components/Card";
import { robots } from "./robots";
import "tachyons";
import CardList from "./components/CardList";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
