import React from 'react';
import LinkList from "./LinkList";

class MainNav extends React.Component {
    render() {

        return (
            <nav className='main-nav' id='mainNav'>
                <LinkList withIcons={true} withClassNames={true}/>
            </nav>
        )
    }
}

export default MainNav;
