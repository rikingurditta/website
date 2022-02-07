import React, {useState} from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FullPageRow from "../components/FullPageRow";
import me_dirty_af from "../images/me_dirty_af.png";
import origami_elephant from "../images/origami elephant cropped.jpg";
import suzanne from "../images/suzanne on fire.png";
import {Link} from "react-router-dom";

export default function Homepage() {
    let [elephantVis, setElephantVis] = useState(false);
    console.log(elephantVis);
    return (
        <Container fluid>
            <FullPageRow>
                <Col md={5} lg={4} className="my-auto">
                    <h1>Hi, I'm Rikin</h1>
                    <p>
                        I'm a computer science and mathematics undergrad at University of Toronto. I'm interested in
                        computer graphics, music production, topology, video games, Rubik's cubes, and cycling.
                        <br/>
                        Here's me looking gross asf in da wild:
                    </p>
                </Col>
                <Col md={5} lg={4} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={me_dirty_af}
                         alt="me lookin dirty af"
                         style={{width: '80%'}}/>
                </Col>
            </FullPageRow>
            <FullPageRow style={{backgroundColor: '#FFEEEE'}}>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>What I'm up to</h2>
                    <p>
                        Usually, I'm making sick beats, playing <i>Sekiro: Shadows Die Twice</i>, running, listening to
                        underground hip hop, obsessing over public transit, cycling (when it's not icy), and reading <i>
                        Le Transperceneige</i>.
                        <br/>
                        <Link to="/projects" push="true">Check out my projects!</Link>
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={suzanne} style={{width: '80%'}} alt="suzanne on fire"/>
                </Col>
            </FullPageRow>
            <div style={elephantVis ? {display: 'none'} : {backgroundColor: '#EEEEEE', textAlign: 'center'}}>
                <a href="javascript:;" onClick={() => setElephantVis(true)} style={{fontSize: '12px', color: '#666666'}}>
                    Where's the elephant??
                </a>
            </div>
            <FullPageRow style={elephantVis ? null : {display: 'none'}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={origami_elephant} style={{width: '80%'}} alt="origami elephant"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Where's the elephant?</h2>
                    <p>
                        Gotchu fam it's still here!!
                    </p>
                </Col>
            </FullPageRow>
        </Container>
    )
}