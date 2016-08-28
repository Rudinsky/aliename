import React, {Component} from 'react';
import Domain from "./domain";


export default class Main extends Component {

    constructor(){

        super(...arguments);

        this.state = {
            domains: []
        };

        this.getInfo();

    }



    getInfo(){

        $.getJSON("//raw.githubusercontent.com/ondrek/aliename/master/admin/domains.json", function(allDomains){
            this.setState({domains:allDomains.concat()});
        }.bind(this));

    }


    render(){

        const items = this.state.domains.map((domain, i) => {
            return (<Domain key={i} name={domain.name} src={domain.image} price={domain.price} title={domain.title} /> );
        });
        
        return (

            <main id="main"><div className="wrapper">

            <h2 className="title">
            PREMIUM, HIGH QUALITY <span className="blue">.COM</span> DOMAINS FROM <span className="blue">OUT OF SPACE</span>
            </h2>

            <h3 className="title">
            <strong>WITH UNIQUE BRANDING</strong> INCLUDED <strong><span className="blue">FOR FREE</span></strong>
            </h3>

            <ul id="domains">
            {items}
            </ul>

            </div></main>

        );

    }

}
