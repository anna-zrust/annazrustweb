import React from 'react';

import ArticleSection from "../components/ArticleSection";

class Travel extends React.Component {
    componentDidMount() {
        this.props.onThemeChange(2)
        this.props.onPageChange('travel')
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

export default Travel;
