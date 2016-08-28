import React, {Component} from 'react';

export default class Header extends Component {

  render() {

    return (

        <header id="header"><div className="wrapper">

            <a href="/">
                <img id="logo" src="res/logo.png" />
            </a>

            <nav id="nav">
                <a href="https://google.com">Contact</a>
                <a href="https://google.com">References</a>
            </nav>

        </div></header>

    );

  }

}
