import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Homepage() {
    return (
        <>
            <Row className="justify-content-md-center" style={{minHeight: '100vh', backgroundColor: '#000022'}}>
                <Col className="my-auto">
                    <h1>hey fam it's me</h1>
                    <h3>was poppin</h3>
                </Col>
            </Row>
            <div style={{minHeight: '100vh', backgroundColor: '#000011'}}>
                <p>henlo</p>
            </div>
        </>
    )
}