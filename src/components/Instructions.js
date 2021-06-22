import React from 'react';

class Instructions extends React.Component {
    render() {
        let instructions = [];
        for (let instruction of this.props.instructions) {
            instructions.push(
                <li key={instruction.title + this.props.recipeName}>
                    <p className='subtitle'>{instruction.title}</p>
                    <p>{instruction.guidance}</p>
                </li>
            )
        }
        return (
            <div className="instructions">
                <h3>Instructions</h3>
                <ol>
                    {instructions}
                </ol>
            </div>
        )
    }
}

export default Instructions;
