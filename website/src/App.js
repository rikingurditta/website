import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <div className="App">
            <Navbar fixed="top" expand="lg">
                <Navbar.Brand href="#home">Rikin</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar>
            <Router>
                <Switch>
                    <Route path="/" component={Homepage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
