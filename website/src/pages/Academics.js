import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FullPageRow from "../components/FullPageRow";
import Expandable from "../components/Expandable";

export default function Academics() {
    return (
        <Container fluid>
            <Row className="justify-content-md-center" style={{minHeight: '400px', backgroundColor: '#EEFFEE'}}>
                <Col md={4} className="my-auto">
                    <h1>Academics</h1>
                </Col>
                <Col md={4} className="my-auto"/>
            </Row>
            <Row className="justify-content-md-center text-content">
                <Col md={4}>
                    <h2>Teaching</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p>This fall semester I'm a TA for MAT135 - Calculus 1. This is my first time as a TA, so hopefully
                        it goes well!</p>
                    <p>
                        <a href="https://koalastothemax.com/" target="_blank">Here's</a> a link to some relevant TAing
                        stuff.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content">
                <Col md={4}>
                    <h2>Computer Science</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p>
                        I'm focusing in computer graphics, and I hope to one day work in the field, either doing
                        research or working on cool stuff like VR tech or movie rendering. This year I'm the VP External
                        for <a target="_blank" href="https://utcg.club/">UofT Computer Graphics Club</a>, and I was a
                        student volunteer for a huge computer graphics conference called <a target="_blank"
                                                                                            href="https://s2020.siggraph.org/">SIGGRAPH</a>.
                    </p>
                    <Expandable inside={<span>Courses I'm taking this year</span>}>
                        <ul>
                            <li>CSC419 - Geometry processing</li>
                            <li>CSC373 - Algorithms</li>
                            <li>CSC317 - Computer graphics</li>
                            <li>CSC343 - Databases</li>
                        </ul>
                    </Expandable>
                    <br/>
                    <Expandable inside={<span>Courses I've taken</span>}>
                        <ul>
                            <li>CSC108 - Intro to programming</li>
                            <li>CSC148 - Intro to computer science</li>
                            <li>CSC165 - Mathematical expression and reasoning for CS</li>
                            <li>CSC207 - Software design</li>
                            <li>CSC209 - Systems programming</li>
                            <li>CSC236 - Intro to the theory of computation</li>
                            <li>
                                <Expandable inside="CSC258 - Computer organization">
                                    <p>This course sucked.</p>
                                </Expandable>
                            </li>
                            <li>CSC263 - Data structures and analysis</li>
                        </ul>
                    </Expandable>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content">
                <Col md={4}>
                    <h2>Mathematics</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p>
                        My second major is in math, mainly because I like math.
                    </p>
                    <Expandable inside={<span>Courses I'm taking this year</span>}>
                        <ul>
                            <li>MAT347 - Groups, rings, and fields</li>
                            <li>MAT309 - Intro to mathematical logic</li>
                            <li>MAT357 - Foundations of real analyiss</li>
                        </ul>
                    </Expandable>
                    <br/>
                    <Expandable inside={<span>Courses I've taken</span>}>
                        <ul>
                            <li>MAT157 - Analysis 1</li>
                            <li>MAT223 - Linear algebra 1</li>
                            <li>MAT237 - Multivariable calculus</li>
                            <li>MAT244 - Intro to ordinary differential equations</li>
                            <li>MAT247 - Algebra 2</li>
                            <li>
                                <Expandable inside={<span>MAT327 - Intro to topology</span>}>
                                    <p>
                                        This course was great! I learned a lot about point-set topology, and got a nice
                                        taste of algebraic topology. The professor, <a href="https://malors.com/" target="_blank">Malors</a>,
                                        was tough on us but he really cared about our learning.
                                    </p>
                                    <p>
                                        <a href="https://rikingurditta.github.io/mat327/" target="_blank">Here</a> are my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                        </ul>
                    </Expandable>
                </Col>
            </Row>
        </Container>
    )
}