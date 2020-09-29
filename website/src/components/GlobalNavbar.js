import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const TRANSITION_HEIGHT = 400;

export default class GlobalNavbar extends Component {
    state = {bgAlpha: 0};

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const bgAlpha = window.scrollY < TRANSITION_HEIGHT ? window.scrollY / TRANSITION_HEIGHT : 1;
            this.setState({bgAlpha: bgAlpha});
            console.log(bgAlpha);
        });
    }

    render() {
        return (
            <Navbar sticky="top" expand="lg" style={{backgroundColor: `rgba(255, 255, 255, 1`}}>
                {/*navbar with fading colour: <Navbar sticky="top" expand="lg" style={{backgroundColor: `rgba(255, 255, 255, ${this.state.bgAlpha})`}}>*/}
                <Navbar.Brand as={Link} to="/" push>Rikin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" push>Home</Nav.Link>
                        {
                            this.props.sitePages.map(page =>
                                <Nav.Link as={Link} to={'/' + page.path} push key={page.path}>{page.name}</Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}