import React, {Component} from 'react';
import Domain from "./domain";


export default class Main extends Component {

    constructor(){

        super(...arguments);

        this.state = {
            domains: [],
            translations: {},
            references: []
        };

        this.getInfo();
        this.getTranslations();
        this.getReferences();

    }



    getInfo(){

        var uniq = this.getUniqDate();
        var url = "//raw.githubusercontent.com/ondrek/aliename/master/admin/domains.json?";

        $.getJSON(url+uniq, function(allDomains){
            this.setState({domains:allDomains.concat()});
        }.bind(this));

    }



    getTranslations(){

        var uniq = this.getUniqDate();
        var url = "//raw.githubusercontent.com/ondrek/aliename/master/admin/texts.json?";

        $.getJSON(url+uniq, function(allTranslations){
            this.setState({translations:allTranslations});
        }.bind(this));

    }


    getReferences(){

        var uniq = this.getUniqDate();
        var url = "//raw.githubusercontent.com/ondrek/aliename/master/admin/references.json?";

        $.getJSON(url+uniq, function(allReferences){
            this.setState({references:allReferences});
        }.bind(this));

    }



    getUniqDate(){

        return ( +new Date() );

    }



    render(){

        const domains = this.state.domains.map((domain, i) => {
            return (<Domain key={i} name={domain.name} src={domain.image} price={domain.price} title={domain.title} /> );
        });

        const references = this.state.references.map((reference, i) => {
            return (<Domain key={i} name={reference.name} src={reference.image} title={reference.title} /> );
        });

        return (

            <main id="main"><div className="wrapper">

                <h2 className="title maintitle" dangerouslySetInnerHTML={{__html:this.state.translations.TITLE}}></h2>
                <h3 className="title maintitle" dangerouslySetInnerHTML={{__html:this.state.translations.SUBTITLE}}></h3>
                <ul id="references">{references}</ul>
                <ul id="domains">{domains}</ul>

                <aside id="contact">
                    <br/><br/><br/><br/><br/><br/><br/>
                    <h2 className="title email"><a href="mailto:hello@rudinsky.studio?subject=Ahoj">HELLO@<i>RUDINSKY</i>.STUDIO</a></h2>
                    <br/><br/><br/><br/><br/><br/><br/>
                </aside>

            </div></main>

        );

    }

}
