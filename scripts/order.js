import React, {Component} from 'react';

export default class Order extends Component {

  render() {

    return (

        <aside id="order"><div className="wrapper">

            <h2>Order Your Own Domain</h2>

            <input type="text" placeholder="Your e-mail address" />
            <br/>
            <textarea rows="6" placeholder="Your message"></textarea>
            <br/>
            <button className="hvr-bounce-to-right">SEND MESSAGE</button>

        </div></aside>

    );

  }

}
