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
                    <p>In the Fall 2020 semester I was a TA for MAT135 - Calculus 1. It was pretty fun! I got to meet
                        lots of students and help them get through a pretty tough course. I hope to TA again sometime in
                        the future!
                    </p>
                    <p>
                        If you were one of my students, <a href="https://forms.gle/WoSfM34xCnz4NRma7"
                                                           target="_blank">here's</a> a link to my anonymous feedback
                        form.
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
                    {/*<Expandable outside={<span>Courses I'm taking this semester</span>}>*/}
                    {/*    <ul>*/}
                    {/*    </ul>*/}
                    {/*</Expandable>*/}
                    <br/>
                    <Expandable outside={<span>Courses I've taken</span>}>
                        <ul>
                            <li>CSC108 - Intro to programming (Fall 2018)</li>
                            <li>CSC148 - Intro to computer science (Winter 2019)</li>
                            <li>CSC165 - Mathematical expression and reasoning for CS (Fall 2018)</li>
                            <li>
                                <Expandable outside={<span>CSC207 - Software design (Fall 2019)</span>}>
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
                                <Expandable outside={<span>CSC209 - Systems programming (Winter 2020)</span>}>
                                    <p className="expand-text">
                                        I enjoyed this course. It wasn't very difficult, it had relatively low workload,
                                        and the assingments were kinda cool. On top of learning the basics of C and
                                        systems programming, we also learned a tiny bit about how we deal with
                                        messages being broken up as they're sent over a network. We used this to
                                        implement a command line-based message board. Fun stuff.
                                    </p>
                                </Expandable>
                            </li>
                            <li>CSC236 - Intro to the theory of computation (Fall 2019)</li>
                            <li>
                                <Expandable outside={<span>CSC258 - Computer organization</span>}>
                                    <p className="expand-text">This course sucked.</p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>CSC263 - Data structures and analysis (Winter 2020)</span>}>
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
                                <Expandable outside={<span>CSC317 - Computer graphics (Winter 2021)</span>}>
                                    <p className="expand-text">
                                        I really liked the content of this course, but it wasn't run very well when I
                                        took it. And it's kinda stressful with weekly assignments, which are always
                                        quite a bit of work. It was pretty fun making a raytracer though!
                                        Here's bubberducky <a href="bubberducky.png" target="_blank">
                                        vibing</a>, and here he is <a href="bubberducky_wistful.png" target="_blank">
                                        being wistful</a>.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>CSC367 - Parallel programming (Winter 2021)</span>}>
                                    <p className="expand-text">
                                        I hated this course. The assignments were way too much work, the prof was very
                                        insensitive, and the TAs were incredibly condescending and unhelpful. I guess
                                        the content was interesting. The one thing I loved in this course was was my
                                        partner, Sean. What a legend.<br/>
                                        <a href="https://rikingurditta.github.io/csc367/condensed"
                                           target="_blank">Here</a> are my notes for the first half-ish of the course,
                                        made while studying for the midterm.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>CSC369 - Operating systems (Summer 2020)</span>}>
                                    <p className="expand-text">
                                        This course had some pretty interesting and important material, and the
                                        first assignment (design and implement your own file system) was pretty fun. But
                                        it was not organized very well, and it was <i>a lot</i> of work.<br/>
                                        <a href="https://rikingurditta.github.io/csc369/" target="_blank">Here</a> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    outside={
                                        <span>CSC373 - Algorithm design, analysis, and complexity (Fall 2020)</span>}>
                                    <p className="expand-text">
                                        This course was a nightmare. <a href="https://rikingurditta.github.io/csc373/"
                                                                        target="_blank">Here</a> are my notes on most of
                                        the content.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    outside={<span>CSC417 - Physics-based animation (Fall 2020)</span>}>
                                    <p className="expand-text">
                                        This was my favourite class of the Fall 2020 semester. I learned a lot! We
                                        started with simulating deformable bodies made of springs, then learned how to
                                        use the finite element method to simulate continuous materials. We used this to
                                        simulate some pretty realistic-looking cloth! Then we simulated rigid bodies,
                                        which were pretty tricky. For my final project, my partner and I made a pretty
                                        crappy fluid simulator. <a
                                        href="https://github.com/rikingurditta/csc417-tilt-paint"
                                        target="_blank">Here</a> it is!
                                        <br/>
                                        The prof was great and the assignments were fun, though they are a lot of
                                        work. <a href="https://www.youtube.com/channel/UCIM0HrQVDcUYdrZvSwuUJgA"
                                                 target="_blank">Here's</a> the prof's YouTube channel with the lectures
                                        for the course. I didn't take any notes to be honest.
                                    </p>
                                </Expandable>
                            </li>
                            <li> CSC419 - Geometry processing (Fall 2020)</li>
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
                    {/*<Expandable outside={<span>Courses I'm taking this semester</span>}>*/}
                    {/*    <ul>*/}
                    {/*    </ul>*/}
                    {/*</Expandable>*/}
                    <br/>
                    <Expandable outside={<span>Courses I've taken</span>}>
                        <ul>
                            <li>MAT157 - Analysis 1 (Fall 2018 - Winter 2019)</li>
                            <li>MAT223 - Linear algebra 1 (Winter 2019)</li>
                            <li>MAT237 - Multivariable calculus (Fall 2019 - Winter 2020)</li>
                            <li>MAT244 - Intro to ordinary differential equations (Fall 2019)</li>
                            <li>MAT247 - Algebra 2 (Winter 2020)</li>
                            <li>MAT315 - Introduction to Number Theory (Winter 2021)</li>
                            <li>
                                <Expandable outside={<span>MAT327 - Intro to topology (Summer 2020)</span>}>
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
                            <li>
                                <Expandable
                                    outside={<span>MAT347 - Groups, rings, and fields (Fall 2020 - Winter 2021)</span>}>
                                    <p className="expand-text">
                                        <a href="https://rikingurditta.github.io/mat347/" target="_blank">Here</a> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>MAT367 - Differential geometry (Winter 2021)</span>}>
                                    <p className="expand-text">
                                        <a href="https://rikingurditta.github.io/mat367/" target="_blank">Here</a> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    outside={<span>STA257 - Probability and Statistics I (Fall 2019)</span>}>
                                    <p className="expand-text">
                                        🤮
                                    </p>
                                </Expandable>
                            </li>
                        </ul>
                    </Expandable>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content">
                <Col md={4}>
                    <h2>Breadth and Interest</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p>
                        I'm interested in a lot of different stuff. Here are some courses I've taken at UofT that aren't
                        about computer science or mathematics.
                    </p>
                    <Expandable outside={<span>Courses I've taken</span>}>
                        <ul>
                            <li>
                                <Expandable
                                    outside={<span>PHY151+PHY152 - Foundations of Physics I and II (Fall 2018 - Winter 2019)</span>}>
                                    <p className="expand-text">
                                        I took these courses because I planned on studying physics if I didn't get into
                                        CS. However these courses kinda taught me that physics isn't my thing. I like
                                        it, but it's pretty spooky. I'll stick to math.
                                        <br/>
                                        They were pretty good courses though! Especially PHY151, which was taught by the
                                        amazing <a href="https://www8.physics.utoronto.ca/~dfvj/" target="_blank">Daniel
                                        F. V. James</a>. 😍
                                    </p>
                                </Expandable>
                            </li>
                            <li>ENV200 - Intro to Environmental Studies (Fall 2019)</li>
                            <li>CCR199 - Russia at War (Winter 2019)</li>
                            <li>EEB215 - Conservation Biology (Summer 2020)</li>
                            <li>
                                <Expandable outside={<span>LIN200 - Intro to Language (Fall 2020)</span>}>
                                    <p className="expand-text">
                                        <a href="https://rikingurditta.github.io/lin200/" target="_blank">Here</a> are
                                        my notes for the course.
                                    </p>
                                </Expandable></li>
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
                                analysis, and complexity</a>
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/mat327/" target="_blank">MAT327 - Intro to
                                topology</a>
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/mat347/" target="_blank">MAT347 - Groups, fields,
                                and rings</a>
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/mat367/" target="_blank">MAT367 - Differential
                                Geometry</a>
                        </li>
                        <li>
                            <a href="https://rikingurditta.github.io/lin200/" target="_blank">LIN200 - Intro to
                                Language</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}