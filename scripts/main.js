import React, {Component} from 'react';
import Domain from "./domain";


export default class Main extends Component {

  render() {

    return (

        <main id="main"><div className="wrapper">

            <h2 className="title">
                PREMIUM, HIGH QUALITY <span className="blue">.COM</span> DOMAINS FROM <span className="blue">OUT OF SPACE</span>
            </h2>

            <h3 className="title">
                <strong>WITH UNIQUE BRANDING</strong> INCLUDED <strong><span className="blue">FOR FREE</span></strong>
            </h3>

            <ul id="domains">

                <Domain src="./res/dentaking.png" name="Dentaking.com" price="4500€" title="Dental services" />
                <Domain src="./res/quarini.png" name="Quarini.com" price="4500€" title="Beautiful domain for your startup" />
                <Domain src="./res/placeholder.png" name="Palmavia.com" price="4500€" title="Cool name for your new property" />
                <Domain src="./res/fitlords.png" name="Fitlords.com" price="4500€" title="For your new gym" />
                <Domain src="./res/brainsdigital.png" name="Brainsdigital.com" price="4500€" title="Digital agency like no other" />
                <Domain src="./res/mockupino.png" name="Mockupino.com" price="4500€" title="Free graphic resources portal" />
                <Domain src="./res/placeholder.png" name="Copyspeaker.com" price="4500€" title="In case you rather speak than write" />
                <Domain src="./res/placeholder.png" name="Ideabreakers.com" price="4500€" title="Wanna have original creative agency?" />
                <Domain src="./res/placeholder.png" name="Sewyn.com" price="4500€" title="Perfect name for your service company" />

                <Domain src="./res/madellin.png" name="Madellin.com" price="4500€" title="Apartments Stomorska Chroatia" />
                <Domain src="./res/promenadanitra.png" name="Promenadanitra.sk" price="4500€" title="New living park Nitra, Slovakia" />
                <Domain src="./res/ostruziny.png" name="Ostruziny.sk" price="4500€" title="Real Estate project in High Tatras" />

            </ul>

        </div></main>

    );

  }

}
