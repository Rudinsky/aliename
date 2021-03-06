import React, {Component} from 'react';

export default class Domain extends Component {

    render() {

        const newline = "%0A";
        let withsubject = "mailto:rudinsky.m@gmail.com?subject=" + this.props.name;
        let withText = withsubject + "&body=Hello!" + newline + "I'm interested%20in%20your%20domain > " + this.props.name + "!";
        let withDetails = withText + newline + newline + "Please contact me!";

        return (

            <li className="hvr-grow-shadow">
                <a href={withDetails}>
                    <img src={this.props.src} />
                    <strong>{this.props.name}</strong>
                    <span>{this.props.price}</span>
                    <aside>{this.props.title}</aside>
                </a>
            </li>

        );

    }

}
