import React, {Component} from 'react';

export default class Header extends Component {

  render() {

    return (

        <header id="header"><div className="wrapper">

            <a href="/#">
                <img id="logo" src="res/logo.png" />
            </a>

            <nav id="nav">
                <a href="/#?references">Contact</a>
                <a href="/#?references">References</a>
            </nav>

        </div></header>

    );

  }

}
