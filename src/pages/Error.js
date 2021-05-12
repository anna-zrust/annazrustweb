import React from 'react';
import ArticleSection from "../components/ArticleSection";

class Error extends React.Component {
    render() {
        return (
            <main>
                <ArticleSection className='error'>
                    <h2>Page not found!</h2>
                </ArticleSection>
            </main>
        )
    }
}

export default Error;

