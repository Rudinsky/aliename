import React from "react";
import {render} from "react-dom";
import Bubble from "./bubble";

render(
    <div>
        <Bubble hallo="World" />
    </div>,
    document.getElementById("root")
);

