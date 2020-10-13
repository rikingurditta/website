import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FullPageRow from "../components/FullPageRow";
import origami_elephant from "../images/origami elephant cropped.jpg";
import suzanne from "../images/suzanne on fire.png";
import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <Container fluid>
            <FullPageRow>
                <Col md={5} lg={4} className="my-auto">
                    <h1>Hi, I'm Rikin</h1>
                    <p>
                        I'm a computer science and mathematics undergrad at University of Toronto. I'm interested in
                        computer graphics, music production, topology, video games, Rubik's cubes, and cycling.
                    </p>
                </Col>
                <Col md={5} lg={4} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={origami_elephant}
                         alt="elephant"
                         style={{width: '80%'}}/>
                </Col>
            </FullPageRow>
            <FullPageRow style={{backgroundColor: '#FFEEEE'}}>
                <Col md={5} lg={4} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={suzanne} style={{width: '80%'}} alt="image goes here"/>
                </Col>
                <Col md={5} lg={4} className="my-auto">
                    <h2>What I'm up to</h2>
                    <p>
                        I'm currently looking for an internship! Aside from that, I'm organizing UTCG events, modelling
                        doughnuts in Blender, making beats, learning abstract algebra, and implementing geometry
                        processing algorithms.
                        <br/>
                        <Link to="/projects" push>Check out my projects!</Link>
                    </p>
                </Col>
            </FullPageRow>
        </Container>
    )
}