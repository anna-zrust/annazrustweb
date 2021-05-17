import React from 'react';

import ArticleSection from "../components/ArticleSection";
import FigureImg from "../components/FigureImg";
import Button from "../components/Button";
import CreativeCommonLicence from "../components/CreativeCommonLicence";

class Home extends React.Component {
    componentDidMount() {
        this.props.onThemeChange(1)
        this.props.onPageChange('home')
        this.props.onPageNameChange('Hello.')
        this.props.onPageSubtitleChange('')
    }

    render() {
        return (
            <main>
                <ArticleSection className='about-me'>
                    <FigureImg
                        className='avatar'
                        src='img/anna-zrust-300.jpg'
                        alt='Anna Marie Zrust smiling'
                    />

                    <h2>Who am I</h2>
                    <p>
                        Hi, my name is Anna Marie Zrůst and I welcome you on my website. :) I love photography and I
                        also enjoy
                        cooking (mostly vegan foods) . Furthermore I love to play with graphic design and web
                        design.
                    </p>
                    <h2>What is this?</h2>
                    <p>
                        This is a website. duh. You can find here few recepise and some photos from my travels. More
                        content soon(ish).
                    </p>
                    <hr />
                    <h2>Technical Stuff</h2>
                    <p>
                        Do you want to see Design system for this website or my other projects? Follow links bellow.
                    </p>
                    <div className="buttons-wrapper">
                        <Button innerText='Design System' link='/home/design-system' withIcon={true} />
                        <Button innerText='Other projects' link='/home/other-projects' withIcon={true}/>
                    </div>
                    <h3>Licenses</h3>
                    <CreativeCommonLicence />
                    <p>
                        <span>All photos on page "Design system" are subject to </span>
                        <a href="https://pixabay.com/service/license/">Pixabay license</a>
                        <span> and/or </span>
                        <a href="https://www.pexels.com/license/">Pexels license</a>.
                    </p>
                    <p>
                        <span>Font awesome graphics are subject to license </span>
                        <a href="https://fontawesome.com/license/free">here</a>.
                    </p>
                </ArticleSection>
            </main>
        )
    }
}

export default Home;

