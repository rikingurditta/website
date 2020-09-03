import React from 'react';
import FullPageRow from "../components/FullPageRow";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Experience() {
    return (
        <Container fluid>
            <FullPageRow>
                <Col md={4} className="my-auto">
                    <h1>My experience</h1>
                    <h3>Experience</h3>
                </Col>
                <Col md={4} className="my-auto">
                    <img alt="experience pic"/>
                </Col>
            </FullPageRow>
        </Container>
    )
}