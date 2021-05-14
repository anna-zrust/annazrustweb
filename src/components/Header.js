import React from 'react';
import Hero from "./Hero";
import MainNav from "./MainNav";

class Header extends React.Component {
    render() {
        let categoryType = this.props.pageSubtitle ? 'sub-category' : 'main-category'

        return (
            <header className='main-header'>
                <Hero type={categoryType}  pageName={this.props.pageName} pageSubtitle={this.props.pageSubtitle}/>
                <MainNav />
            </header>
        )
    }
}

export default Header;
