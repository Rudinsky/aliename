import React, {Component} from 'react';

export default class Footer extends Component {

  render() {

    return (

        <footer id="footer"><div className="wrapper">

          <main id="about">

            <h4>About</h4>

            <strong>Matej Rudinsky</strong><br/>
            Blatnica 40<br/>
            038 15 Blatnica<br/>
            <strong>Slovak Republic</strong><br/><br/>

            <strong>VAT ID:</strong> SK 1079180157<br/>
            <strong>email:</strong> <a href="mailto:hello@aliename.com?subject=Ahoj">hello@aliename.com</a>
            <br/>

          </main>

          <aside id="legal">

            <h4>Legal</h4>

            <a href="#">Privacy Policy</a><br/>
            <a href="#">Refund Policy</a><br/>

          </aside>

          <aside id="support">

            <h4>Support</h4>

            <input type="text" placeholder="Your e-mail address" />
            <br/>
            <textarea rows="6" placeholder="Your message"></textarea>
            <br/>
            <button>SEND MESSAGE</button>

          </aside>


        </div></footer>

    );

  }

}
