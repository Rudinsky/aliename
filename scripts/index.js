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


(function(){

    "use strict";


    $("#references").hide();

    $(window).on("hashchange", function(){

        var isReferences = location.hash.indexOf("references")>0;

        if (isReferences){

            $("#domains").slideToggle();
            $("#references").slideToggle();

            console.info("in references");

        } else {

            $("#domains").slideDown();
            $("#references").slideUp();

            console.info("in else");

        }



    });



})();