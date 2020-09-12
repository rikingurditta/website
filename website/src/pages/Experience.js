import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TitleRow from "../components/TitleRow";
import Row from "react-bootstrap/Row";

export default function Experience() {
    return (
        <Container fluid>
            <TitleRow style={{backgroundColor: '#FFDDDD'}}>
                <Col md={4} className="my-auto">
                    <h1>My experience</h1>
                </Col>
                <Col md={4}/>
            </TitleRow>
            <Row className="justify-content-center text-content">
                <Col md={4}>
                    <h2>Centivizer</h2>
                    <p>Summer 2019, Summer 2020</p>
                </Col>
                <Col md={4}>
                    <p>
                        <a href="https://www.centivizer.com/" target="_blank">Centivizer</a> is a startup based in
                        UofT's <a href="https://imedia.mie.utoronto.ca/" target="_blank">Interactive Media Lab</a>.
                    </p>
                    <p>
                        In 2019, I worked on a 3D driving simulator game for the <i>Experiential Centivizer</i> project.
                        I worked on:
                        <ul>
                            <li>3D game code</li>
                            <li>3D assets (some modelling and texturing)</li>
                            <li>UX and senior-oriented design</li>
                        </ul>
                    </p>
                    <p>
                        In 2020, I worked on <i>Cognitive Centivizer</i>, a suite of whack-a-mole games meant to assess
                        different aspects of cognitive ability. I worked on:
                        <ul>
                            <li>implementing new versions of the games</li>
                            <li>caching and other performance/stability concerns</li>
                            <li>planning, designing, and implementing full rewrite of the codebase with React.js</li>
                            <li>
                                the <a href="https://clyp.it/sdjwuirh" target="_blank">music</a> and sound design
                                for the game
                            </li>
                        </ul>
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center text-content">
                <Col md={4}>
                    <h2>NATIONAL</h2>
                    <p>Summer 2019</p>
                </Col>
                <Col md={4}>
                    <p>
                        <a href="https://www.national.ca/en/" target="_blank">NATIONAL Public Relations</a> is a large
                        Canadian public relations company. I was an intern for the Research and Strategy team at their
                        Toronto office.
                    </p>
                    <p>
                        I worked on:
                        <ul>
                            <li>media monitoring</li>
                            <li>
                                data processing and analysis in Excel (as well as automation of these tasks with macros
                                and scripts)
                            </li>
                            <li>
                                automating report generation based on Excel sheets of data
                            </li>
                            <li>
                                developing web scraping scripts, bug testing large-scale web scraping services
                            </li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}