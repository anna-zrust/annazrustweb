import React from 'react';

class ArticleSection extends React.Component {
    render() {
        return (
            <article className={this.props.className}>
                {this.props.children}
            </article>
        )
    }
}

export default ArticleSection;
