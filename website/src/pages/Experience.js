import React from 'react';
import FullPageRow from "../components/FullPageRow";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import bio_pic from "../images/eric_andre_keyboardist.png";

export default function Experience() {
    return (
        <Container fluid>
            <FullPageRow>
                <Col md={4} className="my-auto">
                    <h1>My experience</h1>
                    <h3>Professional and academic</h3>
                </Col>
                <Col md={4} className="my-auto">
                    <img alt="experience pic"/>
                </Col>
            </FullPageRow>
            {/*<FullPageRow style={{backgroundColor: '#FFEEEE'}}>*/}
            {/*    <Col md={4} className="my-auto">*/}
            {/*        <img alt="pic of centivizer work"/>*/}
            {/*    </Col>*/}
            {/*    <Col md={4} className="my-auto">*/}
            {/*        <h2>Work Experience</h2>*/}
            {/*        <p>Centivizer stuff*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*</FullPageRow>*/}
            {/*<FullPageRow>*/}
            {/*    <Col md={4} className="my-auto">*/}
            {/*        <h2>Computer Science</h2>*/}
            {/*        <p>I've taken computer science courses in*/}
            {/*            <ul>*/}
            {/*                <li>software design</li>*/}
            {/*                <li>systems programming</li>*/}
            {/*                <li>operating systems</li>*/}
            {/*                <li>computer organization</li>*/}
            {/*                <li>theory of computer science</li>*/}
            {/*                <li>data structures</li>*/}
            {/*            </ul>*/}
            {/*            This year I'm excited to take courses in*/}
            {/*            <ul>*/}
            {/*                <li>geometry processing</li>*/}
            {/*                <li>computer graphics</li>*/}
            {/*                <li>algorithms</li>*/}
            {/*                <li>databases</li>*/}
            {/*            </ul>*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*    <Col md={4} className="my-auto">*/}
            {/*        <img src={bio_pic} alt="pic of me"/>*/}
            {/*    </Col>*/}
            {/*</FullPageRow>*/}
            {/*<FullPageRow style={{backgroundColor: '#FFFFEE'}}>*/}
            {/*    <Col md={4} className="my-auto">*/}
            {/*        <img src={bio_pic} alt="pic of me"/>*/}
            {/*    </Col>*/}
            {/*    <Col md={4} className="my-auto">*/}
            {/*        <h2>Mathematics</h2>*/}
            {/*        <p>I've taken mathematics in*/}
            {/*            <ul>*/}
            {/*                <li>analysis</li>*/}
            {/*                <li>multivariable calculus</li>*/}
            {/*                <li>linear algebra</li>*/}
            {/*                <li>ordinary differential equations</li>*/}
            {/*                <li>topology (general and algebraic)</li>*/}
            {/*            </ul>*/}
            {/*            This year I'm excited to take courses in*/}
            {/*            <ul>*/}
            {/*                <li>abstract algebra</li>*/}
            {/*                <li>combinatorics</li>*/}
            {/*                <li>real analysis</li>*/}
            {/*            </ul>*/}
            {/*            I am also excited to TA for Calculus 1 this year!*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*</FullPageRow>*/}
        </Container>
    )
}