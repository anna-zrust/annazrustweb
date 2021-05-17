import React from 'react';

import ArticleSection from "../components/ArticleSection";

class Home extends React.Component {
    componentDidMount() {
        this.props.onThemeChange(1)
        this.props.onPageChange('design-system')
        this.props.onPageNameChange('Design System')
        this.props.onPageSubtitleChange('Show case of design elements from this page')
    }

    render() {
        return (
            <main>
                <ArticleSection className='design-system'>
                    <p>Hello there</p>
                </ArticleSection>
            </main>
        )
    }
}

export default Home;

