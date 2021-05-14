import React from 'react';
import LinkList from "./LinkList";

class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.navRef = React.createRef();
        this.state = {
            navOffsetTop: 0,
            stickyClassName: ''
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this.setState({ navOffsetTop: this.navRef.current.offsetTop})
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

     onScroll() {
        if ( window.pageYOffset > this.state.navOffsetTop) {
            this.setState({ stickyClassName: 'sticky'})
        } else {
            this.setState({ stickyClassName: ''})
        }
    }

    render() {
        return (
            <nav className={'main-nav ' + this.state.stickyClassName} ref={this.navRef}>
                <LinkList withIcons={true} withClassNames={true}/>
            </nav>
        )
    }
}

export default MainNav;
