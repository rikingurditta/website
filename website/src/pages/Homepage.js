import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import origami_elephant from "../images/origami elephant cropped.jpg";
import bio_pic from "../images/eric_andre_keyboardist.png";
import FullPageRow from "../components/FullPageRow";
import Row from "react-bootstrap/Row";

export default function Homepage() {
    return (
        <Container fluid>
            <FullPageRow>
                <Col md={4} className="my-auto">
                    <h1>Hi, I'm Rikin</h1>
                    <h3>Welcome to my website! It's still under construction.</h3>
                </Col>
                <Col md={4} className="my-auto">
                    <img src={origami_elephant}
                         alt="elephant"
                         style={{width: '75%'}}/>
                </Col>
            </FullPageRow>
            <FullPageRow style={{backgroundColor: '#EEEEFF'}}>
                <Col md={4} className="my-auto">
                    <img src={bio_pic} alt="pic of me"/>
                </Col>
                <Col md={4} className="my-auto">
                    <h2>About me</h2>
                    <p>I'm a computer science and mathematics undergrad at University of Toronto.<br/>Hire me please!
                        I am begging you. I'm not really qualified or anything but I can talk to you about underground
                        hip hop artists, and I think that's pretty cool.
                    </p>
                </Col>
            </FullPageRow>
        </Container>
    )
}