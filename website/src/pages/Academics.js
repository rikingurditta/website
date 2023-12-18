import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Expandable from "../components/Expandable";
import NewTabLink from "../components/NewTabLink";
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
                    <h2>Masters</h2>
                </Col>
                <Col md={4} className="my-auto">
                    <p>I started my MMath in Computer Science at University of Waterloo in September 2023. My supervisor
                    is the wonderful <NewTabLink href="https://cs.uwaterloo.ca/~c2batty/">Professor Christopher Batty</NewTabLink>!
                    I'm doing research into methods in physics-based animation, particularly fluid simulation.
                    </p>
                    <p>
                        If you were one of my students, <NewTabLink href="https://forms.gle/WoSfM34xCnz4NRma7"
                                                                    >here's</NewTabLink> a link to my anonymous feedback
                        form.
                    </p>
                    <Expandable outside={<span>My courses</span>}>
                        <ul>
                            <li>
                                <Expandable outside={<span>CS 770 - Numerical Analysis (Fall 2023)</span>}>
                                    <p className="expand-text">
                                        Great course! Glad I finally know what an LU factorization is :D
                                        My prof was <NewTabLink href="https://cs.uwaterloo.ca/~jorchard/">Jeff Orchard</NewTabLink>,
                                        who is a great lecturer who tells a lot of jokes. You can tell he really cares about inclusivity
                                        and kindness in his class too.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>CS 795 - Fundamentals of Optimization (Fall 2023)</span>}>
                                    <p className="expand-text">
                                        Pretty awesome course. It's a very rigorous theoretical treatment of optimization,
                                        but that's the sort of thing I enjoy so I liked it a lot. Plus I had a very friendly
                                        and supportive prof, <NewTabLink href="https://uwaterloo.ca/combinatorics-and-optimization/about/people/wmoursi">Walaa Moursi</NewTabLink>,
                                        who is also an amazing lecturer.
                                    </p>
                                </Expandable>
                            </li>
                        </ul>
                    </Expandable>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content"
                 style={{backgroundColor: '#F8FFF8'}}>
                <Col md={4}>
                    <h2>Undergrad</h2>
                </Col>
                <Col md={4}/>
            </Row>
            <Row className="justify-content-md-center text-content"
                 style={{backgroundColor: '#F8FFF8'}}>
                <Col md={4}>
                    <h4>Teaching</h4>
                </Col>
                <Col md={4} className="my-auto">
                    <p>In the Fall 2020 semester I was a TA for MAT135 - Calculus 1 at UofT. It was pretty fun! I got to meet
                        lots of students and help them get through a pretty tough course. I hope to TA again sometime in
                        the future!
                    </p>
                    <p>
                        If you were one of my students, <NewTabLink href="https://forms.gle/WoSfM34xCnz4NRma7"
                                                                    >here's</NewTabLink> a link to my anonymous feedback
                        form.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content"
                 style={{backgroundColor: '#F8FFF8'}}>
                <Col md={4}>
                    <h4>Computer Science</h4>
                </Col>
                <Col md={4} className="my-auto">
                    <p>
                        In my undergrad at UofT I focused in computer graphics. I hope to one day work in the field, either doing
                        research or working on cool stuff like game engines or film animation. I was the President
                        of <NewTabLink href="https://utcg.club/">UofT Computer Graphics Club</NewTabLink>, and I was a
                        student volunteer at <NewTabLink href="https://s2020.siggraph.org/">SIGGRAPH 2020</NewTabLink>, a
                        huge computer graphics conference.
                    </p>
                    <Expandable outside={<span>Courses I took in undergrad</span>}>
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
                                        <NewTabLink href="https://github.com/rikingurditta/csc207">Here</NewTabLink> is my
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
                                        <NewTabLink href="https://rikingurditta.github.io/csc263/">Here</NewTabLink> are
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
                                        Here's bubberducky <NewTabLink href="bubberducky.png">
                                        vibing</NewTabLink>, and here he is <NewTabLink href="bubberducky_wistful.png">
                                        being wistful</NewTabLink>.
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
                                        <NewTabLink href="https://rikingurditta.github.io/csc367/condensed"
                                          >Here</NewTabLink> are my notes for the first half-ish of the course,
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
                                        <NewTabLink href="https://rikingurditta.github.io/csc369/">Here</NewTabLink> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    outside={
                                        <span>CSC373 - Algorithm design, analysis, and complexity (Fall 2020)</span>}>
                                    <p className="expand-text">
                                        This course was a nightmare. <NewTabLink href="https://rikingurditta.github.io/csc373/"
                                                                       >Here</NewTabLink> are my notes on most of
                                        the content.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    outside={<span>CSC417 - Physics-based animation (Fall 2020)</span>}>
                                    <p className="expand-text">
                                        This was one of my favourite classes in undergad. I learned a lot! It was taught
                                        excellently by <NewTabLink href="http://142.93.146.228/researchdb/">David Levin
                                        </NewTabLink>. We started with simulating deformable bodies made of springs, then
                                        learned how to use the finite element method to simulate continuous materials. We
                                        used this to simulate some pretty realistic-looking cloth! Then we simulated rigid
                                        bodies, which were pretty tricky. For my final project, my partner and I made a pretty
                                        crappy fluid simulator. <NewTabLink
                                        href="https://github.com/rikingurditta/csc417-tilt-paint"
                                       >Here</NewTabLink> it is!
                                        <br/>
                                        The prof was great and the assignments were fun, though they are a lot of
                                        work. <NewTabLink href="https://www.youtube.com/channel/UCIM0HrQVDcUYdrZvSwuUJgA"
                                                >Here's</NewTabLink> the prof's YouTube channel with the lectures
                                        for the course, and
                                        <NewTabLink href="https://github.com/dilevin/CSC417-physics-based-animation">Here
                                        </NewTabLink> are all the course materials. I didn't take any notes to be honest.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    outside={<span>CSC419 - Geometry processing (Fall 2020)</span>}>
                                    <p className="expand-text">
                                        This class is excellent, but very challenging. It's taught  by
                                        <NewTabLink href="https://www.cs.toronto.edu/~jacobson/">Alec Jacobson</NewTabLink>,
                                        who is one of The experts on the topic, and a great person to learn from (I also had
                                        the opportunty to do a project with him in Fall 2022). The assignments are pretty
                                        difficult, but very interesting and rewarding. In this course, through dealing with
                                        meshes, you also learn a lot about optimization, numerical linear algebra, discretizing
                                        continuous problems, and more. It's a really cool way to learn about turning real-world
                                        challenges into programs that a computer can solve. Highly recommend!
                                        <br/>
                                        For my final project, my friend and I implemented
                                        <NewTabLink href="https://www.dgp.toronto.edu/projects/complementary-dynamics/">
                                        Complementary Dynamics</NewTabLink>, a paper written by one of our TAs.
                                        <NewTabLink href="https://youtu.be/s8Nm_ytwO6w">Here's</NewTabLink> a fun YouTube video
                                        on it, and
                                        <NewTabLink href="https://github.com/rikingurditta/csc419-complementary-dynamics/">Here's
                                        </NewTabLink> our project.
                                        <br/>
                                        <NewTabLink href="https://github.com/alecjacobson/geometry-processing">Here
                                        </NewTabLink> are all the course materials.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>CSC311 - Intro to Machine Learning (Fall 2022)</span>}>
                                    <p className="expand-text">
                                        <NewTabLink href="https://rikingurditta.github.io/csc311">Here</NewTabLink> are
                                        my (permanently incomplete) course notes. This course was alright! I recommend it.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>CSC494 - Computer Science Project (Fall 2022)</span>}>
                                    <p className="expand-text">
                                        I did a project on augmenting <NewTabLink href="http://www.cs.columbia.edu/cg/nested-cages/">
                                        Nested Cages</NewTabLink> by replacing its contact resolution system with a simplified version
                                        of <NewTabLink href="https://ipc-sim.github.io/">IPC</NewTabLink>. It was really fun and I
                                        learned a lot, but I don't think I managed my time and workload well enough to do a really
                                        good project. I also burnt out pretty hard. But I got a lot of good guidance, ideas, and
                                        advice from my professor <NewTabLink href="https://www.cs.toronto.edu/~jacobson/">Alec
                                        </NewTabLink>, and I enjoyed pretending to be a grad student in his group.
                                        <br/>
                                        <NewTabLink href="https://rikingurditta.github.io/csc494">Here</NewTabLink> are
                                        my notes and work on the project, and <NewTabLink
                                        href="https://rikingurditta.github.io/csc494/CSC494_Report.pdf">Here's
                                        </NewTabLink> my report.
                                    </p>
                                </Expandable>
                            </li>
                        </ul>
                    </Expandable>
                </Col>
            </Row>
            <Row className="justify-content-md-center text-content"
                 style={{backgroundColor: '#F8FFF8'}}>
                <Col md={4}>
                    <h4>Mathematics</h4>
                </Col>
                <Col md={4} className="my-auto">
                    <p>
                        In my undergrad I also minored in math, mainly because I like math.
                    </p>
                    <Expandable outside={<span>Courses I took in undergrad</span>}>
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
                                        taste of algebraic topology. The professor, <NewTabLink href="https://malors.com/"
                                                                                      >Malors</NewTabLink>,
                                        was tough on us but he really cared about our learning.
                                        <br/>
                                        <NewTabLink href="https://rikingurditta.github.io/mat327/">Here</NewTabLink> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    outside={<span>MAT347 - Groups, rings, and fields (Fall 2020 - Winter 2021)</span>}>
                                    <p className="expand-text">
                                        <NewTabLink href="https://rikingurditta.github.io/mat347/">Here</NewTabLink> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>MAT367 - Differential geometry (Winter 2021)</span>}>
                                    <p className="expand-text">
                                        <NewTabLink href="https://rikingurditta.github.io/mat367/">Here</NewTabLink> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable
                                    outside={<span>APM348 - Mathematical Modelling (Winter 2023)</span>}>
                                    <p className="expand-text">
                                        Great course! <NewTabLink
                                        href="https://www.math.toronto.edu/cms/people/faculty/stinchcombe-adam/"> Adam
                                        Stinchcombe</NewTabLink> was a great professor, and the topics presented were
                                        super cool - we learned about electrical signals in squid neurons, blood flow in the
                                        circulatory system, highway traffic, disease modelling, and more. My friend and I did
                                        our final project fitting Ontario's COVID-19 infection dynamics to a compartment model.
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
            <Row className="justify-content-md-center text-content"
                 style={{backgroundColor: '#F8FFF8'}}>
                <Col md={4}>
                    <h4>Breadth and Interest</h4>
                </Col>
                <Col md={4} className="my-auto">
                    <p>
                        I'm interested in a lot of stuff. Here are some courses I took during my undergrad that aren't about
                        computer science or mathematics.
                    </p>
                    <Expandable outside={<span>Courses I took in undergrad</span>}>
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
                                        amazing <NewTabLink href="https://www8.physics.utoronto.ca/~dfvj/">Daniel
                                        F. V. James</NewTabLink>. 😍
                                    </p>
                                </Expandable>
                            </li>
                            <li>ENV100 - Intro to Environmental Studies (Fall 2019)</li>
                            <li>CCR199 - Russia at War (Winter 2019)</li>
                            <li>EEB215 - Conservation Biology (Summer 2020)</li>
                            <li>
                                <Expandable outside={<span>LIN200 - Intro to Language (Fall 2020)</span>}>
                                    <p className="expand-text">
                                        <NewTabLink href="https://rikingurditta.github.io/lin200/">Here</NewTabLink> are
                                        my notes for the course.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>GGR217 - Urban Landscapes and Planning (Fall 2022)</span>}>
                                    <p className="expand-text">
                                        This course is really great, I highly recommend it to everyone. It's important to
                                        learn about the history, social implications, economic factors, and political
                                        challenges that are relevant to urban life. My prof was Adam Zendel, who was
                                        excellent. I admire a teacher who is unafraid of arguing with the university to
                                        get the accessibility entrance unlocked, unfraid of discussing the harmful political
                                        projects of the university and much of its faculty, and unafraid of saying "Fuck cops"
                                        in a classroom. This topic is inherently political and it would be unserious to teach
                                        it in the depoliticized manner in which it is typically discussed.
                                        <br/>
                                        Highly recommend.
                                    </p>
                                </Expandable>
                            </li>
                            <li>
                                <Expandable outside={<span>CIN210 - Horror Film (Winter 2023)</span>}>
                                    <p className="expand-text">
                                        Amazing course. Highly recommend, even if only so that you can spend an afternoon every
                                        week in a theatre watching a movie and then another afternoon talking about it.
                                        My prof was <NewTabLink href="http://laurencramer.com/cramerabout">Lauren Cramer
                                        </NewTabLink>, who was excellent. Aside from being a great prof for the course, it was
                                        great to talk to her about hip hop after each lecture (it's one of her research topics).
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
                            <NewTabLink href="https://rikingurditta.github.io/csc263/">CSC263 - Data structures
                                and analysis</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/csc311/">CSC311 - Intro to Machine
                                Learning</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/csc369/">CSC369 - Operating
                                systems</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/csc373/">CSC373 - Algorithm design,
                                analysis, and complexity</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/mat327/">MAT327 - Intro to
                                topology</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/mat347/">MAT347 - Groups, fields,
                                and rings</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/mat347/">MAT354 - Complex Analysis 1</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/mat367/">MAT367 - Differential
                                Geometry</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/lin200/">LIN200 - Intro to
                                Language</NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href="https://rikingurditta.github.io/ggr217/">GGR217 - Urban Landscapes
                                and Planning</NewTabLink>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}