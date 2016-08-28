import React, {Component} from 'react';

export default class Footer extends Component {

  render() {

    return (

        <footer id="footer"><div className="wrapper">

          <main id="about">

            <h4>About</h4>

            Matej Rudinsky<br/>
            Blatnica 40<br/>
            038 15 Blatnica<br/>
            Slovak Republic<br/><br/>

            VAT ID: SK 1079180157<br/>
            email: hello@aliename.com<br/>

          </main>

          <aside id="legal">

            <h4>Legal</h4>

            Privacy Policy<br/>
            Refund Policy<br/>

          </aside>

          <aside id="support">

            <h4>Support</h4>

            <input type="text" mozactionhint="next" /><br/><br/>

            <textarea rows="4" cols="50">
            Your Message..
            </textarea>

          </aside>


        </div></footer>

    );

  }

}
