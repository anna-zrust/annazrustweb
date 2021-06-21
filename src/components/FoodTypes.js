import React from 'react';
import EmptyWrapper from "./EmptyWrapper";

class FoodTypes extends React.Component {
    render() {
        let foodTypes = [];
        for (const item of this.props.foodTypes) {
            foodTypes.push(
                <span key={item + this.props.dataForKeyOne + this.props.dataForKeyTwo} >{'#'+ item}</span>
            )
        }
        return (
            <EmptyWrapper>
                {foodTypes}
            </EmptyWrapper>
        )
    }
}

export default FoodTypes;
