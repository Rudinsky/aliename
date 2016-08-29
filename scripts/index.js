import React from "react";
import {render} from "react-dom";
import Footer from "./footer";
import Main from "./main";
import Header from "./header";
import References from "./references";


render(
    <main>
        <Header />
        <References />
        <Main />
        <Footer />
    </main>,
    document.getElementById("root")
);


(function(){

    "use strict";

    $("#references").hide();
    $("#contact").hide();

    $(window).on("hashchange", function(){

        var isReferences = location.hash.indexOf("references")>0;
        var isContact = location.hash.indexOf("contact")>0;


        $(".maintitle").slideDown();

        if (isReferences){

            $("#domains").slideUp();
            $("#references").slideDown();
            $("#contact").slideUp();

            console.info("in references");

        } else if (isContact){

            $("#domains").slideUp();
            $("#references").slideUp();
            $("#contact").slideDown();

            $(".maintitle").slideUp();

            console.info("in contact");

        } else {

            $("#domains").slideDown();
            $("#references").slideUp();
            $("#contact").slideUp();

            console.info("in else");

        }

    });


})();