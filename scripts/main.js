import React, {Component} from 'react';
import Domain from "./domain";


export default class Main extends Component {

  render() {

    return (

        <main id="main"><div className="wrapper">

            <h2 className="title">
                PREMIUM, HIGH QUALITY <span className="blue">.COM</span> DOMAINS WITH NAMES FROM <span className="blue">OUT OF SPACE</span>
            </h2>

            <h3 className="title">
                WITH UNIQUE BRANDING INCLUDED FOR FREE
            </h3>

            <ul id="domains">

                <Domain src="./res/domain_a.png" name="Dentaking 1" price="9500" title="Dental services" />
                <Domain src="./res/domain_b.png" name="Dentaking 2" price="2500" title="Dental services" />
                <Domain src="./res/domain_c.png" name="Dentaking 3" price="8200" title="Dental services" />
                <Domain src="./res/domain_d.png" name="Dentaking 4" price="1500" title="Dental services" />
                <Domain src="./res/domain_e.png" name="Dentaking 5" price="2500" title="Dental services" />
                <Domain src="./res/domain_f.png" name="Dentaking 6" price="4800" title="Dental services" />
                <Domain src="./res/domain_e.png" name="Dentaking 5" price="2500" title="Dental services" />
                <Domain src="./res/domain_f.png" name="Dentaking 6" price="4800" title="Dental services" />

            </ul>

        </div></main>

    );

  }

}
