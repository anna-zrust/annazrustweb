import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LinkListItem extends React.Component {
    render() {
        let link
        if(this.props.isExternalLink) {
            link =
                <a href={this.props.link}>
                    {this.props.innerText ? <span>{this.props.innerText}</span> : ''}
                    {this.props.icon ? <FontAwesomeIcon icon={this.props.icon} size={this.props.iconSize} /> : ''}
                </a>
        }
        else {
            link =
                <NavLink to={this.props.link} exact activeClassName="active" >
                    {this.props.innerText ? <span>{this.props.innerText}</span> : ''}
                    {this.props.icon ? <FontAwesomeIcon icon={this.props.icon} size={this.props.iconSize} /> : ''}
                </NavLink>
        }
        return (
            <li className={this.props.className}>
                {link}
            </li>
        )
    }
}

export default LinkListItem;
