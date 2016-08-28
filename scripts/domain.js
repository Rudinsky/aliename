import React, {Component} from 'react';

export default class Domain extends Component {

    render() {

        return (

            <li>
                <img src={this.props.src} />
                <strong>{this.props.name}</strong>
                <span>{this.props.price}€</span>
                <aside>Dental services</aside>
            </li>

        );

    }

}
