import React from 'react';
import LinkListItem from "./LinkListItem";
import { faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

class SocialNetworks extends React.Component {
    render() {
        return (
            <address className="social-networks">
                <ul>
                    <LinkListItem
                        icon={faLinkedinIn}
                        iconSize='lg'
                        isExternalLink={true}
                        link='https://www.linkedin.com/in/anna-zrust'
                    />
                    <LinkListItem
                        icon={faTwitter}
                        iconSize='lg'
                        isExternalLink={true}
                        link='https://twitter.com/Ponera642'
                    />
                    <LinkListItem
                        icon={faInstagram}
                        iconSize='lg'
                        isExternalLink={true}
                        link='https://www.instagram.com/ponera_/'
                    />
                </ul>
            </address>
        )
    }
}

export default SocialNetworks;
