import React from "react";
import {render} from "react-dom";
import Footer from "./footer";
import Main from "./main";
import Header from "./header";

render(
    <main>
        <Header />
        <Main />
        <Footer />
    </main>,
    document.getElementById("root")
);
