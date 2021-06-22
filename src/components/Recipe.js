import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons'
import FoodTypes from "./FoodTypes";
import FigureImg from "./FigureImg";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

class Recipe extends React.Component {
    render() {
        const imageSizes = [370, 555, 740, 900, 1400, 1800]

        return (
            <section className="recipe">
                <header>
                    <div className="header-of-recipe-wrapper">
                        <div className="heading-wrapper">
                            <h2>{this.props.name}</h2>
                            <p className="subtitle">{this.props.subtitle}</p>
                        </div>
                        <div className="quick-info-wrapper">
                            <div className="cooking-time">
                                <FontAwesomeIcon icon={faClock} />
                                <span>{`Prep.time: ` + this.props.prepTime}</span>
                                <span>{`Total time: ` + this.props.totalTime}</span>
                            </div>
                            <div className="portions">
                                <FontAwesomeIcon icon={faUtensils} />
                                <span>{this.props.portions}</span>
                            </div>
                        </div>
                        <div className="food-types">
                            <FoodTypes foodTypes={this.props.foodTypes} dataForKeyOne={this.props.name} />
                        </div>
                    </div>
                    <FigureImg
                        className='lightbox-ready'
                        alt={this.props.image.alt}
                        sizes='(min-width: 1975px) 590px, (min-width: 800px) 30vw, 90vw'
                        srcSet={imageSizes.map(size => `/img/recipe-thumbnail/${this.props.image.name}-${size}.webp ${size}w, `)}
                    />
                </header>
                <div className="content-wrapper">
                    <Ingredients ingredients={this.props.ingredients} recipeName={this.props.name}/>
                    <Instructions instructions={this.props.instructions} recipeName={this.props.name}/>
                </div>
            </section>
        )
    }
}

export default Recipe;
