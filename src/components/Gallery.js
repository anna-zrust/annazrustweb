import React from 'react';
import FigureImg from "./FigureImg";

class Gallery extends React.Component {
    render() {
        const landscapeImgSizes = [180, 270, 360, 518, 777, 1036, 1400, 1800];
        const portraitImgSizes = [260, 390, 520, 1040];

        let pictures = [];

        for (let picture of this.props.data) {
            let type;
            let sizes;
            let srcSet;

            if (picture.type === 'landscape') {
                type = ' landscape';
                sizes = '(min-width: 1975px) 518px, (min-width: 1200px) 26.2vw, 44.6vw'
                srcSet = landscapeImgSizes.map(size => `/img/gallery-landscape/${picture.name}-${size}.webp ${size}w, `);
            } else if (picture.type === 'portrait') {
                type = ' portrait';
                sizes = '(min-width: 1975px) 260px, 20vw';
                srcSet = portraitImgSizes.map(size => `/img/gallery-portrait/${picture.name}-${size}.webp ${size}w, `);
            }

            pictures.push(
                <div className={'photo ' + type} key={picture.id}>
                    <FigureImg
                        className='lightbox-ready'
                        alt={picture.alt}
                        sizes={sizes}
                        srcSet={srcSet}
                    />
                </div>
            )
        }
        return (
           <div className='photo-gallery'>
               {pictures}
           </div>
        )
    }
}

export default Gallery;
