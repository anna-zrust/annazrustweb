import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import EmptyWrapper from "./EmptyWrapper";

class Button extends React.Component {
    render() {
        let button
        if (this.props.isExternalLink) {
            button =
                <a href={this.props.link} className='button'>
                    {this.props.innerText}
                    {this.props.withIcon ? <FontAwesomeIcon icon={faArrowRight} /> : ''}
                </a>
        }
        else {
            button =
                <Link to={this.props.link} className='button'>
                    {this.props.innerText}
                    {this.props.withIcon ? <FontAwesomeIcon icon={faArrowRight} /> : ''}
                </Link>
        }
        return (
            <EmptyWrapper>
                {button}
            </EmptyWrapper>
        )
    }
}

export default Button;
