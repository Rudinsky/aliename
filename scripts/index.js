import React from "react";
import {render} from "react-dom";
import Footer from "./footer";
import Main from "./main";
import Header from "./header";
import References from "./references";

render(
    <main>
        <References />
        <Header />
        <Main />
        <Footer />
    </main>,
    document.getElementById("root")
);
