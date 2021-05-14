import React from 'react';
import ArticleSection from "../components/ArticleSection";

class Cooking extends React.Component {
    componentDidMount() {
        this.props.onThemeChange(3)
        this.props.onPageChange('cooking')
        this.props.onPageNameChange('Cooking')
        this.props.onPageSubtitleChange('')
    }

    render() {
        return (
            <main>
                <ArticleSection>
                    <p>I like to travel a lot. Here you can find few pictures from my travels. :) </p>
                </ArticleSection>
            </main>
        )
    }
}

export default Cooking;

