import React from 'react';

class Hero extends React.Component {
    render() {
        let heroClassName = 'hero-' + this.props.type;
        return (
            <div className={heroClassName}>
                <div className="hero-inner-wrapper">
                    <h1>{this.props.headerText}</h1>
                    {this.props.subtitleText ? <p className='subtitle'>{this.props.subtitleText}</p> : ''}
                </div>
            </div>
        )
    }
}

export default Hero;
