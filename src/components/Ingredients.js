import React from 'react';
import EmptyWrapper from "./EmptyWrapper";

class Ingredients extends React.Component {
    render() {
        let ingredients = [];
        for (let ingredient of this.props.ingredients) {
            let listItems = ingredient.list.map(item => <li key={ingredient.name + item + this.props.recipeName}><span>{item}</span></li>)
            ingredients.push(
                <EmptyWrapper key={ingredient.name + this.props.recipeName}>
                    {ingredient.name ? <h4>{ingredient.name}</h4> : ''}
                    <ul>
                        {listItems}
                    </ul>
                </EmptyWrapper>
            )
        }
        return (
            <div className="ingredients">
                <h3>Ingredients</h3>
                {ingredients}
            </div>
        )
    }
}

export default Ingredients;
