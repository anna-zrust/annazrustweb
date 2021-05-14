import React from 'react';

class Hero extends React.Component {
    render() {
        let heroClassName = 'hero-' + this.props.type;
        return (
            <div className={heroClassName}>
                <div className="hero-inner-wrapper">
                    <h1>{this.props.pageName}</h1>
                    {this.props.pageSubtitle ? <p className='subtitle'>{this.props.pageSubtitle}</p> : ''}
                </div>
            </div>
        )
    }
}

export default Hero;
