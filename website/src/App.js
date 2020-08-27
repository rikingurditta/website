import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <div className="App" style={{color: 'white'}}>
            <Navbar fixed="top" expand="lg">
                <Navbar.Brand href="#home" style={{color: 'white'}}>Rikin</Navbar.Brand>
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Nav.Link href="#home" style={{color: 'white'}}>Home</Nav.Link>
                    <Nav.Link href="#link" style={{color: 'white'}}>Link</Nav.Link>
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
