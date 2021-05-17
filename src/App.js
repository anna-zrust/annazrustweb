import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound"

import Home from "./pages/Home";
import Travel from "./pages/Travel"
import Cooking from "./pages/Cooking";
import DesignSystem from "./pages/DesignSystem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageNameChange = this.handlePageNameChange.bind(this);
        this.handlePageSubtitleChange = this.handlePageSubtitleChange.bind(this);
        this.state = {
            theme: 1,
            page: 'home',
            pageName: 'Hello.',
            pageSubtitle: ''
        };
    }

    handleThemeChange(theme) {
        this.setState({theme})
    }

    handlePageChange(page) {
        this.setState({page})
    }

    handlePageNameChange(pageName) {
        this.setState({pageName})
    }

    handlePageSubtitleChange(pageSubtitle) {
        this.setState({pageSubtitle})
    }

    render() {
        return (
            <div className={'theme-' + this.state.theme + ' ' + this.state.page}>
                <Header pageName={this.state.pageName} pageSubtitle={this.state.pageSubtitle}/>
                <Switch>
                    <Route
                        path={["/", "/home"]}
                        exact
                        render={props => (
                            <Home {...props}
                                  onThemeChange={this.handleThemeChange}
                                  onPageChange={this.handlePageChange}
                                  onPageNameChange={this.handlePageNameChange}
                                  onPageSubtitleChange={this.handlePageSubtitleChange}
                            />
                        )}
                    />
                    <Route
                        path="/home/design-system"
                        exact
                        render={props => (
                            <DesignSystem {...props}
                                  onThemeChange={this.handleThemeChange}
                                  onPageChange={this.handlePageChange}
                                  onPageNameChange={this.handlePageNameChange}
                                  onPageSubtitleChange={this.handlePageSubtitleChange}
                            />
                        )}
                    />
                    <Route
                        path="/travel"
                        exact
                        render={props => (
                            <Travel {...props}
                                  onThemeChange={this.handleThemeChange}
                                  onPageChange={this.handlePageChange}
                                  onPageNameChange={this.handlePageNameChange}
                                  onPageSubtitleChange={this.handlePageSubtitleChange}
                            />
                        )}
                    />
                    <Route
                        path="/cooking"
                        exact
                        render={props => (
                            <Cooking {...props}
                                    onThemeChange={this.handleThemeChange}
                                    onPageChange={this.handlePageChange}
                                    onPageNameChange={this.handlePageNameChange}
                                    onPageSubtitleChange={this.handlePageSubtitleChange}
                            />
                        )}
                    />
                    <Route
                           render={props => (
                               <PageNotFound {...props}
                                        onPageChange={this.handlePageChange}
                                        onPageNameChange={this.handlePageNameChange}
                                        onPageSubtitleChange={this.handlePageSubtitleChange}
                               />
                           )}
                    />
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default App;

