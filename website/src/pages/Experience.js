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
                        its GPUs and CPUs. I worked on the Windows Kernel Mode Driver, which is the software that runs at
                        the OS-level to enable GPU hardware to work with a
                        computer.
                    </p>
                    <p>
                        As an intern, I worked on code that handles memory and scheduling for the GPU, so that it can
                        effectively manage its data and tasks. I've worked on architecture, development, and (especially)
                        debugging the driver code.
                    </p>
                    <p>
                        I also created and presented training materials on topics like the driver architecture and
                        using <NewTabLink href="https://en.wikipedia.org/wiki/WinDbg">WinDbg</NewTabLink> (a program
                        that allows a developer to debug Windows applications running at the kernel level).
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
                        Toronto office. At the firm I worked on:
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
                        General Executive, VP External, Co-President
                        <br/>
                        2019 - 2023
                    </p>
                </Col>
                <Col md={4}>
                    <p>
                        <NewTabLink href="https://utcg.club">UTCG</NewTabLink> organizes workshops/tutorials, research
                        talks, industry events, field trips, and social events for computer graphics enthusiasts at
                        UofT. Here are some of the things I've worked on as an executive member:
                    </p>
                    <ul>
                        <li>
                            worked on the club's <NewTabLink href="https://utcg.club">website</NewTabLink>
                        </li>
                        <li>
                            organized the Rapid Fire Research Talks event, where <NewTabLink
                            href="https://www.dgp.toronto.edu/">DGP</NewTabLink> researchers presented their own work
                            so that students could see research happening at UofT
                        </li>
                        <li>
                            planned and run workshops on <NewTabLink
                            href="https://utcg.github.io/workshops/2022/02/10/shaders">2D shader programming
                            </NewTabLink>, <NewTabLink href="https://utcg.github.io/workshops/2022/04/07/globe">using
                            three.js for 3D web programming</NewTabLink>, and more
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}