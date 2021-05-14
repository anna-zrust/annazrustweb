import React from 'react';

class PageNotFound extends React.Component {
    componentDidMount() {
        this.props.onPageChange('page-not-found')
        this.props.onPageNameChange('404')
        this.props.onPageSubtitleChange('Page not found')
    }

    render() {
        return (
            <main />
        )
    }
}

export default PageNotFound;

