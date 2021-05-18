import React from 'react';

import ArticleSection from "../components/ArticleSection";
import ThemeToggle from "../components/ThemeToggle";
import Breadcrumbs from "../components/Breadcrumbs";

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
                <Breadcrumbs />
                <ArticleSection className='design-system'>
                    <h2>Change theme</h2>
                    <ThemeToggle onThemeChange={this.props.onThemeChange} currentTheme={this.props.currentTheme}/>
                </ArticleSection>
            </main>
        )
    }
}

export default Home;

