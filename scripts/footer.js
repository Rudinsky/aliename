import React, {Component} from 'react';

export default class Footer extends Component {

  render() {

    return (

        <footer id="footer">

          <main>

            <strong>About</strong>

            Matej Rudinsky
            Stara Klenova 8
            Bratislava
            Slovak Republic

            VAT ID: SK 1079180157
            email: hello@aliename.com

          </main>

          <aside>

            <strong>Legal</strong>

            Privacy Policy
            Refund Policy

          </aside>

          <aside>

            <strong>Legal</strong>

            <input type="text" mozactionhint="next" />

                <textarea rows="4" cols="50">
                At w3schools.com you will learn how to make a website.
                </textarea>

          </aside>


        </footer>

    );

  }

}
