import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Expandable from "../components/Expandable";
import TitleRow from "../components/TitleRow";

export default function Academics() {
    return (
        <Container fluid>
            <TitleRow style={{backgroundColor: '#DDFFDD'}}>
                <Col md={4} className="my-auto">
                    <h1>Academics</h1>
                </Col>
                <Col md={4}/>
            </TitleRow>
            <Row className="justify-content-md-center text-content">
                <Col md={4}>
                    <h2>Teaching</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p>This fall semester I'm a TA for MAT135 - Calculus 1. This is my first time as a TA, so hopefully
                        it goes well!</p>
                    {/*<p>*/}
                    {/*    <a href="https://koalastothemax.com/" target="_blank">Here's</a> a link to some relevant TAing*/}
                    {/*    stuff.*/}
                    {/*</p>*/}
                    <p>
                        <a href="https://forms.gle/WoSfM34xCnz4NRma7" target="_blank">Here's</a> a link to my anonymous
                        feedback form.
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
                        for <a href="https://utcg.club/" target="_blank">UofT Computer Graphics Club</a>, and I was a
                        student volunteer for a huge computer graphics conference called <a target="_blank"
                                                                                            href="https://s2020.siggraph.org/">SIGGRAPH</a>.
                    </p>
                    <Expandable inside={<span>Courses I'm taking this year</span>}>
                        <ul>
                            <li>
                                <Expandable
                                    inside={<span>CSC373 - Algorithm design, analysis, and complexity (Fall)</span>}>
                                    <p className="expand-text">
                                        <a href="https://rikingurditta.github.io/csc373/" target="_blank">Here</a> are
                                        my notes for the course (in-progress).
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    inside={<span>CSC417 - Physics-based animation (Fall)</span>}>
                                    <p className="expand-text">
                                        <a href="https://rikingurditta.github.io/csc417/" target="_blank">Here</a> are
                                        my notes for the course (in-progress).
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    inside={<span>CSC419 - Geometry processing (Fall)</span>}>
                                    <p className="expand-text">
                                        <a href="https://rikingurditta.github.io/csc419/" target="_blank">Here</a> are
                                        my notes for the course (in-progress).
                                    </p>
                                </Expandable>
                            </li>
                            <li>CSC317 - Computer graphics (Winter)</li>
                            <li>CSC343 - Intro to databases (Winter)</li>
                        </ul>
                    </Expandable>
                    <br/>
                    <Expandable inside={<span>Courses I've taken</span>}>
                        <ul>
                            <li>CSC108 - Intro to programming</li>
                            <li>CSC148 - Intro to computer science</li>
                            <li>CSC165 - Mathematical expression and reasoning for CS</li>
                            <li>
                                <Expandable inside={<span>CSC207 - Software design</span>}>
                                    <p className="expand-text">
                                        This course was pretty fun. The course project was to design and implement games
                                        for Android in teams. Within my team of 6, my friend and I made Bomberman. It
                                        was a lot of fun not only designing the software architecture, but also
                                        implementing it as well as creating all the assets.
                                        <br/>
                                        <a href="https://github.com/rikingurditta/csc207" target="_blank">Here</a> is my
                                        course project. (Yes, almost all the <i>beautiful</i> art for Bomberman was done
                                        by me.)
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable inside={<span>CSC209 - Systems programming</span>}>
                                    <p className="expand-text">
                                        I enjoyed this course. It wasn't very difficult, had relatively low workload,
                                        and the assingments were kinda cool. On top of learning the basics of C and
                                        systems programming, we also learned a tiny bit about how we deal with
                                        messages being broken up as they're sent over a network. We used this to
                                        implement a command line-based message board. Fun stuff.
                                    </p>
                                </Expandable>
                            </li>
                            <li>CSC236 - Intro to the theory of computation</li>
                            <li>
                                <Expandable inside="CSC258 - Computer organization">
                                    <p className="expand-text">This course sucked.</p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable inside="CSC263 - Data structures and analysis">
                                    <p className="expand-text">
                                        I enjoyed this course! It was cool seeing how data structures I've been using
                                        actually work under the hood, the cool stuff you can do with algorithms like
                                        DFS, and cool analysis techniques like decision trees.<br/>
                                        <a href="https://rikingurditta.github.io/csc263/" target="_blank">Here</a> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable inside="CSC369 - Operating systems">
                                    <p className="expand-text">
                                        This course had some pretty interesting and important material, and the
                                        first assignment (design and implement your own file system) was pretty fun. But
                                        it was not organized very well, and it was <i>a lot</i> of work.<br/>
                                        <a href="https://rikingurditta.github.io/csc369/" target="_blank">Here</a> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
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
                            <li>
                                <Expandable inside={<span>MAT347 - Groups, rings, and fields (Fall-Winter)</span>}>
                                    <p className="expand-text">
                                        <a href="https://rikingurditta.github.io/mat347/" target="_blank">Here</a> are
                                        my notes for the course (in-progress).
                                    </p>
                                </Expandable>
                            </li>
                            <li>MAT357 - Foundations of real analysis (Winter)</li>
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
                                    <p className="expand-text">
                                        This course was great! I learned a lot about point-set topology, and got a nice
                                        taste of algebraic topology. The professor, <a href="https://malors.com/"
                                                                                       target="_blank">Malors</a>,
                                        was tough on us but he really cared about our learning.
                                        <br/>
                                        <a href="https://rikingurditta.github.io/mat327/" target="_blank">Here</a> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                        </ul>
                    </Expandable>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content">
                <Col md={4}>
                    <h2>Course Notes</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p>
                        Here are all of the course notes that I've typed up nicely and uploaded!
                    </p>
                    <ul>
                        <li>
                            <a href="https://rikingurditta.github.io/csc263/" target="_blank">CSC263 - Data structures
                                and analysis</a>
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/csc369/" target="_blank">CSC369 - Operating
                                systems</a>
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/csc373/" target="_blank">CSC373 - Algorithm design,
                                analysis, and complexity</a> (in progress)
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/mat327/" target="_blank">MAT327 - Intro to
                                topology</a>
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/mat347/" target="_blank">MAT347 - Groups, fields,
                                and rings</a> (in progress)
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/csc417/" target="_blank">CSC417 - Physics-based
                                animation</a> (in progress)
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/csc419/" target="_blank">CSC419 - Geometry
                                processing</a> (in progress)
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}