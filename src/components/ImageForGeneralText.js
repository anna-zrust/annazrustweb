import React from 'react';
import FigureImg from "./FigureImg";

/*Landscape only*/
class ImageForGeneralText extends React.Component {
    render() {
        const imgSizes = [300, 400, 600, 900, 1400, 1800]

        return (
            <FigureImg
                className="basic-img lightbox-ready"
                alt={this.props.alt}
                sizes="(min-width: 1580px) 900px, 60vw"
                srcSet={imgSizes.map(size => `/img/basic-img-landscape/${this.props.imageName}-${size}.webp ${size}w, `)}
                caption={this.props.caption}
            />
        )
    }
}

export default ImageForGeneralText;
