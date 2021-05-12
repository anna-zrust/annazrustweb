import React from 'react';
import LinkList from "./LinkList";
import SocialNetworks from "./SocialNetworks";

class Footer extends React.Component {
    render() {
        return (
           <footer>
               <div className="footer-inner-wrapper">
                   <SocialNetworks />
                   <LinkList withIcons={false} withClassNames={false} ulClassName='footer-nav'/>
               </div>
           </footer>
        )
    }
}

export default Footer;
