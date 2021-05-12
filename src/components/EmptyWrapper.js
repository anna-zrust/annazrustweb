import React from 'react';

class EmptyWrapper extends React.Component {
    render() {
        return (
            this.props.children
        )
    }
}

export default EmptyWrapper;
