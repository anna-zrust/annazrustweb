import React from 'react';

class FigureImg extends React.Component {
    render() {
        return (
            <figure className={this.props.className}>
                <picture>
                    <img
                        src={this.props.src}
                        alt={this.props.alt}
                        srcSet={this.props.srcSet}
                        sizes={this.props.sizes}
                    />
                </picture>
                {this.props.caption ?  <figcaption>{this.props.caption}</figcaption> : ''}
            </figure>
        )
    }
}

export default FigureImg;
