import React from 'react';
import './App.scss';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Academics from "./pages/Academics";
import GlobalNavbar from "./components/GlobalNavbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const pages = [
    {
        name: 'Projects',
        path: 'projects',
        component: Projects
    },
    {
        name: 'Experience',
        path: 'experience',
        component: Experience
    },
    {
        name: 'Academics',
        path: 'academics',
        component: Academics
    },
];


function App() {
    return (
        <div className="App">
            <Router>
                <GlobalNavbar sitePages={pages}/>
                <ScrollToTop/>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    {
                        pages.map(page =>
                            <Route path={'/' + page.path}
                                   component={page.component}
                                   key={page.path}/>
                        )
                    }
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
