import React from 'react';
import { Link } from 'react-router-dom';

import ArticleSection from "../components/ArticleSection";
import ThemeToggle from "../components/ThemeToggle";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import ImageForGeneralText from "../components/ImageForGeneralText";
import ThematicBreak from "../components/ThematicBreak";
import CategoryCardsList from "../components/CategoryCardsList";
import RecipeCardsList from "../components/RecipeCardsList";
import Recipe from "../components/Recipe";

class Home extends React.Component {
    componentDidMount() {
        this.props.onThemeChange(1)
        this.props.onPageChange('design-system')
        this.props.onPageNameChange('Design System')
        this.props.onPageSubtitleChange('Show case of design elements from this page')
    }

    render() {

        let categoryCardData = [
            {
                header: 'Card with img',
                subtitle: 'card subtitle - 1999',
                link: '#',
                id: '01Card-DesignSystem',
                disabled: false,
            },
            {
                header: 'Card without img',
                subtitle: 'super cool and quite long subtitle',
                link: '#',
                id: '02Card-DesignSystem',
                disabled: false,
            },
            {
                header: 'Disabled card',
                subtitle: 'card subtitle - 0000',
                link: '#',
                id: '03Card-DesignSystem',
                disabled: true,
            }
        ];

        let recipeCardData = [
            {
                header: 'Recipe with img',
                subtitle: 'This recipe is with image',
                link: '#',
                id: '01Recipe-DesignSystem',
                disabled: false,
                foodTypes: ['vegan', 'easy'],
                image: {
                    alt: 'Margarita pizza with basel',
                    name: 'pizza',

                },
            },
            {
                header: 'Card with broken img',
                subtitle: 'This recipe is without image',
                link: '#',
                id: '02Recipe-DesignSystem',
                disabled: false,
                foodTypes: ['meat-dish', 'diary-free'],
            },
            {
                header: 'Disabled recipe',
                subtitle: 'This recipe is disabled',
                link: '#',
                id: '03Recipe-DesignSystem',
                disabled: true,
                foodTypes: ['meat-dish', 'diary-free'],
                image: {
                    alt: 'Margarita pizza with basel',
                    name: 'pizza',

                },
            }
        ];

        return (
            <main>
                <Breadcrumbs />
                <ArticleSection className='design-system'>
                    <h2>Change theme</h2>
                    <ThemeToggle onThemeChange={this.props.onThemeChange} currentTheme={this.props.currentTheme}/>
                    <h2>General text with image</h2>
                    <p>Some casual paragraph, minding its own business. <Link to="/">Wooow this is a link!</Link> Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Donec vel erat non magna dignissim
                        venenatis eu at tellus. Nunc convallis lacus ut odio mollis imperdiet. Maecenas malesuada dolor
                        eu nulla pretium luctus.
                    </p>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                    <h6>Header 6</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel erat non magna dignissim
                        venenatis eu at tellus. Nunc convallis lacus ut odio mollis imperdiet. Maecenas malesuada dolor eu nulla
                        pretium luctus. Cras aliquam lorem elit, sed dapibus tortor ullamcorper at. Mauris eleifend, risus sit amet
                        efficitur tincidunt, dui ligula interdum urna, fermentum convallis urna nibh in tellus. Donec vulputate mi
                        congue ex ullamcorper condimentum. Vivamus in posuere nulla, at scelerisque purus. Praesent cursus, nisl sed
                        dictum euismod, diam ante viverra neque, sed ultricies nibh nulla ac ligula. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia curae; Duis fermentum in erat nec elementum. Pellentesque
                        non volutpat enim, et rhoncus sem. Fusce blandit mi nibh, nec ultricies orci dictum id. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut mollis porttitor sem id maximus.
                        Nullam vehicula varius nulla, ut viverra libero tempus quis.
                    </p>
                    <p>Phasellus posuere nisi id pharetra hendrerit. Etiam molestie ante et bibendum tristique. Praesent felis
                        nisl, aliquet vitae ipsum non, tempor finibus enim. Donec condimentum turpis vitae tellus dignissim, in
                        venenatis ipsum commodo. Aliquam ut lorem blandit, elementum ex vitae, commodo odio. Suspendisse eget
                        posuere purus, nec tincidunt ligula. Fusce vitae dolor at massa tincidunt convallis porttitor a dui.
                        Suspendisse rhoncus libero vel felis sodales, et efficitur elit tempus. Morbi iaculis sem eu lobortis
                        lobortis. Nunc sagittis mi non risus tincidunt, vitae condimentum libero suscipit. Nunc sed metus vel odio
                        porta ultricies eget vitae nunc. Maecenas scelerisque risus quis est luctus vulputate sed et massa.
                    </p>
                    <ImageForGeneralText alt='image alt' caption='image caption' imageName='pancake' />
                    <p>Mauris quis justo placerat, malesuada lectus quis, lobortis diam. Praesent diam elit, tincidunt ac libero
                        vitae, malesuada hendrerit neque. Ut et mi eu purus rhoncus bibendum. Ut tempor dignissim purus consectetur
                        laoreet. Sed quis maximus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nec
                        porttitor libero, ac consequat odio. Duis tortor tellus, iaculis a aliquet sed, imperdiet nec orci. Interdum
                        et malesuada fames ac ante ipsum primis in faucibus. Duis placerat, diam sit amet semper fringilla, ante
                        metus porttitor nulla, in dignissim sem mi ut urna. Pellentesque sit amet tincidunt mauris, dignissim
                        euismod mi. Sed dictum orci sit amet urna aliquam, nec tempus urna molestie. Fusce sagittis nunc ut nulla
                        cursus, nec euismod dui elementum.
                    </p>
                    <ThematicBreak />
                    <h2>Go to button</h2>
                    <Button innerText='Go to page' link='/' withIcon={true} />
                    <h3>More buttons next to each other</h3>
                    <div className="buttons-wrapper">
                        <Button innerText='Go to external link' link='https://github.com/' withIcon={true} isExternalLink={true} />
                        <Button innerText='Go to homepage without icon' link='/' />
                    </div>
                    <h2>Category cards</h2>
                    <p>Cards are used in "Travel" section of the website.</p>
                    <CategoryCardsList data={categoryCardData}/>
                    <h2>Recipes card</h2>
                    <p>They are used in "Cooking" section of the website. </p>
                    <RecipeCardsList data={recipeCardData}/>
                    <h2>Recipe template</h2>
                    <p>This template is being used in "Cooking" section of the website.</p>
                    <Recipe
                        name='Baked vegan potatoes'
                        subtitle='Delicious vegan, but creamy potatoes!'
                        prepTime='15 mins'
                        totalTime='50 mins'
                        portions='2 - 3 portions'
                        foodTypes={['vegan', 'easy']}
                        image={{alt: 'Margarita pizza with basel', name: 'pizza'}}
                        ingredients={[
                            {name: 'Butter', list: ['500g flour', 'raw spinach / arugula', '4 tbs corn starch'] },
                            {name: 'Filling', list:['tofu']}
                        ]}
                        instructions={[
                            {title: 'Mix dry ingredience for butter', guidance: 'In big bowl mix 1 tsp of onion powder, 1 tsp of garlic powder, 500g white flour.'},
                            {title: 'Lorem ipsum dolor sit amet', guidance: 'Donec vel erat non magna dignissim venenatis eu at tellus. Nunc convallis lacus ut odio mollis imperdiet. Maecenas malesuada dolor eu nulla pretium luctus'}
                        ]}
                    />
                </ArticleSection>
            </main>
        )
    }
}

export default Home;
