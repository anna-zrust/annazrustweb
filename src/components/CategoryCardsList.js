import React from 'react';
import CategoryCard from "./CategoryCard";

class CategoryCardsList extends React.Component {
    render() {
        const items = [];
        for (const item of this.props.data) {
            items.push(<CategoryCard key={item.id} header={item.header} subtitle={item.subtitle} link={item.link} disabled={item.disabled} />)
        }

        return (
            <ul className='card-categories-list'>
                {items}
            </ul>
        )
    }
}

export default CategoryCardsList;
