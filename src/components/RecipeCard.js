import React from 'react';
import { Link } from 'react-router-dom';
import FigureImg from "./FigureImg";

class RecipeCard extends React.Component {
    render() {
        let categoryCardClassName = 'recipe-card';
        this.props.disabled ? categoryCardClassName = categoryCardClassName + ' disabled' : categoryCardClassName;

        let foodTypes = [];
        for (const item of this.props.foodTypes) {
            foodTypes.push(
                <span key={item + this.props.link + this.props.header} >{'#'+ item}</span>
            )
        }

        let image;
        const imageSizes = [370, 555, 740, 900, 1400, 1800]
        if (this.props.image) {
            image = <FigureImg
                        className=''
                        alt={this.props.image.alt}
                        sizes='(min-width: 1975px) 370px, (min-width: 1580px) 18.5vw,
                               (min-width: 800px) 28.667vw, (min-width: 400px) 43.524vw, 90vw'
                        srcSet={imageSizes.map(size => `/img/recipe-thumbnail/${this.props.image.name}-${size}.webp ${size}w, `)}
            />
        } else {
            image = <FigureImg
                className=''
                alt=''
                sizes=''
                srcSet=''
            />
        }

        return (
            <li className={categoryCardClassName}>
                <Link to={this.props.link}>
                    {image}
                    <div className="card-inner-wrapper">
                        <h2>{this.props.header}</h2>
                        <p className="subtitle">{this.props.subtitle}</p>
                        <p className="food-types">{foodTypes}</p>
                    </div>
                </Link>
            </li>
        )
    }
}

export default RecipeCard;
