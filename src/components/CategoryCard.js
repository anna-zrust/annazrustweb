import React from 'react';
import { Link } from 'react-router-dom';

class CategoryCard extends React.Component {
    render() {
        let categoryCardClassName = 'category-card'
        this.props.disabled ? categoryCardClassName = categoryCardClassName + ' disabled' : categoryCardClassName;

        return (
            <li className={categoryCardClassName}>
                <Link to={this.props.link}>
                    <h2>{this.props.header}</h2>
                    <p className="subtitle">{this.props.subtitle}</p>
                </Link>
            </li>
        )
    }
}

export default CategoryCard;
