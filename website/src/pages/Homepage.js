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
                    <h1>Hello!</h1>
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
            <Row className="justify-content-md-center" style={{minHeight: '30vh'}}>
                <Col md={4} className="my-auto">
                    <h2>Contact</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p style={{textAlign: 'center'}}>
                        <a href="https://github.com/rikingurditta">
                            <svg className="octicon octicon-mark-github v-align-middle" width="64" height="64"
                                 viewBox="0 0 16 16"
                                 version="1.1" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        {"\t"}
                        <a href="https://www.linkedin.com/in/rikin-gurditta/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" data-supported-dps="64x64"
                                 viewBox="0 0 50 50"
                                 focusable="false">
                                <g fill="none" fillRule="evenodd">
                                    <rect className="bug-text-color" fill="#FFF" x="1" y="1" width="64" height="64"
                                          rx="4"/>
                                    <path
                                        d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                                        className="background" fill="#0077B5"/>
                                </g>
                            </svg>
                        </a>
                    </p>
                    <p style={{fontSize: '12px'}}>
                        School-related email: rikin [dot] gurditta [at] mail [dot] utoronto [dot] ca
                        <br/>
                        School related email but written normally: <a
                        href="mailto:rikin.gurditta@mail.utoronto.ca">rikin.gurditta@mail.utoronto.ca</a>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}