import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import origami_elephant from "../images/origami elephant cropped.jpg";
import bio_pic from "../images/eric_andre_keyboardist.png";
import FullPageRow from "../components/FullPageRow";

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
                         style={{width: '80%'}}/>
                </Col>
            </FullPageRow>
            <FullPageRow style={{backgroundColor: '#FFEEEE'}}>
                <Col md={4} className="my-auto">
                    <img src={bio_pic} alt="pic of me" style={{width: '80%'}}/>
                </Col>
                <Col md={4} className="my-auto">
                    <h2>About me</h2>
                    <p>
                        I'm a computer science and mathematics undergrad at University of Toronto. I'm interested in
                        computer graphics, music production, topology, and video games.
                    </p>
                </Col>
            </FullPageRow>
            <FullPageRow>
                <Col md={4} className="my-auto">
                    <h2>What I'm up to</h2>
                    <p>
                        I'm currently looking for a PEY (Professional Experience Year) internship starting in Summer
                        2021. Aside from that, I'm doing some fun stuff! I'm organizing UTCG events, modelling doughnuts
                        in Blender, making beats, learning abstract algebra, and implementing geometry processing
                        algorithms. Oh, and working on this site!
                    </p>
                </Col>
                <Col md={4} className="my-auto">
                    <img style={{width: '80%'}} alt="image goes here"/>
                </Col>
            </FullPageRow>
        </Container>
    )
}