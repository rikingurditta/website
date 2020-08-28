import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar fixed="top" expand="lg">
                    <Navbar.Brand as={Link} to="/" push>Rikin</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" push>Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects" push>Projects</Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/projects" component={Projects}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
