import React from 'react';
import RecipeCard from "./RecipeCard";

class RecipeCardsList extends React.Component {
    render() {
        const items = [];
        for (const item of this.props.data) {
            items.push(
                <RecipeCard
                    key={item.id}
                    header={item.header}
                    subtitle={item.subtitle}
                    link={item.link}
                    disabled={item.disabled}
                    foodTypes={item.foodTypes}
                    image={item.image}
                />
            )
        }

        return (
            <ul className='card-recipes-list'>
                {items}
            </ul>
        )
    }
}

export default RecipeCardsList;
