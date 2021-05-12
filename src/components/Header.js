import React from 'react';
import Hero from "./Hero";
import MainNav from "./MainNav";

class Header extends React.Component {
    render() {
        return (
            <header className='main-header'>
                <Hero type='main-category'  headerText={this.props.pageName} subtitleText=''/>
                <MainNav />
            </header>
        )
    }
}

export default Header;
