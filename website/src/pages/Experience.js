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
                    <h4>I've done a lot of stuff</h4>
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
                        UofT's <a href="https://imedia.mie.utoronto.ca/" target="_blank">Interactive Media Lab</a>. I
                        worked there in the summers of 2019 and 2020, with many other students.
                    </p>
                    <p>
                        In 2019, I worked on a 3D driving simulator game for the <i>Experiential Centivizer</i> project.
                        This game was meant to provide familiar experiences to residents of retirement/long-term care
                        homes, and also monitor their cognitive ability for signs of dementia. I worked on the 3D game
                        code, 3D assets (some modelling and texturing), and UI/UX.
                    </p>
                    <p>
                        In 2020, I worked on <i>Cognitive Centivizer</i>, a suite of games meant to assess different
                        aspects of cognitive ability using a simple whack-a-mole theme. I worked on implementing new
                        versions of the games, as well as caching and other features. Then, I worked on planning,
                        designing, and implementing a full rewrite of the codebase with React.js. I also did the <a
                        href="https://clyp.it/sdjwuirh">music</a> and SFX sound design for the game in 2019.
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
                        <a href="https://www.national.ca/en/" target="_blank">NATIONAL Public Relations</a> is a pretty
                        large Canadian public relations company. I was an intern for the Research Strategy team at their
                        Toronto office in the summer of 2019.
                    </p>
                    <p>
                        I worked on media monitoring, data processing in Excel, developing complex macros to generate
                        reports based on Excel spreadsheets, developing small scale web-scraping scripts, and debugging
                        large-scale web-scraping services.
                    </p>
                    <p>
                        Media monitoring is essentially analyzing what the media is saying about a topic to inform PR
                        strategy. This job is actually really boring. As a result, a lot of my work went into completely
                        revamping the company's media monitoring process for Amazon, one of NATIONAL's biggest clients.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}