import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Academics from "./pages/Academics";
import GlobalNavbar from "./components/GlobalNavbar";

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
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    {
                        pages.map(page => <Route path={'/' + page.path} component={page.component}/>)
                    }
                </Switch>
            </Router>
        </div>
    );
}

export default App;
