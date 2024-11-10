import bridge from "@vkontakte/vk-bridge";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";

// ========================================
bridge.send("VKWebAppInit", {});
ReactDOM.render(<Game />, document.getElementById("root"));
