import React, {Component} from 'react';

export default class Header extends Component {

  render() {

    return (

        <header id="header"><div className="wrapper">

            <h1><span className="blue">ALIEN</span>NAME</h1>

            <nav id="nav">
                <a href="https://google.com">Contact</a>
                <a href="https://google.com">References</a>
            </nav>

        </div></header>

    );

  }

}
