import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TitleRow from "../components/TitleRow";
import NewTabLink from "../components/NewTabLink";
import Row from "react-bootstrap/Row";

export default function Experience() {
    return (
        <Container fluid>
            <TitleRow style={{backgroundColor: '#FFDDDD'}}>
                <Col md={4} className="my-auto">
                    <h1>Experience</h1>
                </Col>
                <Col md={4}/>
            </TitleRow>
            <Row className="justify-content-center text-content">
                <Col md={4}>
                    <h2>AMD</h2>
                    <p>
                        Windows Driver Developer Intern
                        <br/>
                        May 2021 - August 2022
                    </p>
                </Col>
                <Col md={4}>
                    <p>
                        <NewTabLink href="https://www.amd.com">AMD</NewTabLink> is a semiconductor company, well-known for
                        its GPUs and CPUs. I'm currently an intern in the team working on the Windows Kernel Mode
                        Driver, which is the software that runs at the OS-level to enable GPU hardware to work with a
                        computer.
                    </p>
                    <p>
                        As an intern, I've worked on a number of projects that are under NDA. However, I can say that
                        I work with code that manages memory and scheduling for the GPU, so that it can manage its data
                        and tasks most effectively.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center text-content">
                <Col md={4}>
                    <h2>Centivizer</h2>
                    <p>
                        Game/frontend development
                        <br/>
                        Summer 2019, Summer 2020
                    </p>
                </Col>
                <Col md={4}>
                    <p>
                        <NewTabLink href="https://www.centivizer.com/">Centivizer</NewTabLink> is a startup based in
                        UofT's <NewTabLink href="https://imedia.mie.utoronto.ca/">Interactive Media Lab</NewTabLink>.
                    </p>
                    <p>
                        In 2019, I worked on a 3D driving simulator game for the <i>Experiential Centivizer</i> project.
                        I worked on:
                    </p>
                    <ul>
                        <li>3D game code</li>
                        <li>3D assets (some modelling and texturing)</li>
                        <li>UX and senior-oriented design</li>
                    </ul>
                    <p>
                        In 2020, I worked on <i>Cognitive Centivizer</i>, a suite of whack-a-mole games meant to assess
                        different aspects of cognitive ability. I worked on:
                    </p>
                    <ul>
                        <li>implementing new versions of the games</li>
                        <li>caching and other performance/stability concerns</li>
                        <li>planning, designing, and implementing full rewrite of the codebase with React.js</li>
                        <li>
                            the <NewTabLink href="https://clyp.it/sdjwuirh">music</NewTabLink> and sound design
                            for the game
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-center text-content">
                <Col md={4}>
                    <h2>NATIONAL</h2>
                    <p>
                        Research and strategy
                        <br/>
                        Summer 2019
                    </p>
                </Col>
                <Col md={4}>
                    <p>
                        <NewTabLink href="https://www.national.ca/en/">NATIONAL Public Relations</NewTabLink> is a large
                        Canadian public relations company. I was an intern for the Research and Strategy team at their
                        Toronto office.
                    </p>
                    <p>
                        I worked on:
                    </p>
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
                </Col>
            </Row>
            <Row className="justify-content-center text-content">
                <Col md={4}>
                    <h2>UofT Computer Graphics Club</h2>
                    <p>
                        Executive Member, VP External
                        <br/>
                        2019 - Now
                    </p>
                </Col>
                <Col md={4}>
                    <p>
                        <NewTabLink href="https://utcg.club">UTCG</NewTabLink> organizes workshops/tutorials, research
                        talks, industry events, field trips, and social events for computer graphics enthusiasts at
                        UofT.
                    </p>
                    <p>
                        As an exec/VP, I've:
                    </p>
                    <ul>
                        <li>
                            worked on (and currently update) the club's <NewTabLink href="https://utcg.club">website</NewTabLink>
                        </li>
                        <li>
                            organized the Rapid Fire Research Talks event, where <NewTabLink
                            href="https://www.dgp.toronto.edu/">DGP</NewTabLink> researchers presented their own work
                            so that students could see research happening at UofT
                        </li>
                        <li>
                            contributed to organizing UTCG Projects, an initiative to help students create projects
                            in computer graphics during the online school year
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}