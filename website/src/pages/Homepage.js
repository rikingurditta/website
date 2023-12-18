import React, {useState} from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FullPageRow from "../components/FullPageRow";
import NewTabLink from "../components/NewTabLink";
import me_dirty_af from "../images/me_dirty_af.png";
import me_halo from "../images/me_halo.jpg";
import me_shadow from "../images/me_with_shadow.jpg";
import origami_elephant from "../images/origami elephant cropped.jpg";
import suzanne from "../images/suzanne on fire.png";
import shadow_face from "../images/shadow_face.jpg";
import {Link} from "react-router-dom";

let me_imgs = [me_dirty_af, me_halo, me_shadow];
let me_descs = ["me lookin dirty af", "me smilin", "me w my cat shadow"];

export default function Homepage() {
    let [elephantVis, setElephantVis] = useState(false);
    console.log(elephantVis);
    let imgIndex = Math.floor(Math.random() * me_imgs.length);
    return (
        <Container fluid>
            <FullPageRow>
                <Col md={5} lg={4} className="my-auto">
                    <h1>Hi!! I'm Rikin</h1>
                    <p>
                        I'm a graduate student studying computer graphics at University of Waterloo, under the supervision
                        of <NewTabLink href="https://cs.uwaterloo.ca/~c2batty/">Professor Christopher Batty</NewTabLink>.
                        <br/>
                        I'm interested in fluid sim, music production, reading, tenant organizing, coffee, and a million
                        other things.
                        <br/>
                        Here's me in da wild:
                    </p>
                </Col>
                <Col md={5} lg={4} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={me_imgs[imgIndex]}
                         alt={me_descs[imgIndex]}
                         style={{width: '80%', object_fit: "cover"}}/>
                </Col>
            </FullPageRow>
            <FullPageRow style={{backgroundColor: '#FFEEEE'}}>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>What I'm up to</h2>
                    <p>
                        Usually, I'm playing with my cat, researching fluid sim, listening to underground hip hop,
                        reading literature and indie graphic novels, making bread, and running.
                        <br/>
                        <Link to="/projects" push="true">Check out my projects!</Link>
                    </p>
                </Col>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={suzanne} style={{width: '80%'}} alt="suzanne on fire"/>
                </Col>
            </FullPageRow>
            <FullPageRow>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={shadow_face} style={{width: '80%'}} alt="my cat shadow"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto">
                    <h2>Here's my cat</h2>
                    <p>
                        Her name is Shadow!
                    </p>
                </Col>
            </FullPageRow>
            <div style={elephantVis ? {display: 'none'} : {backgroundColor: '#EEEEEE', textAlign: 'center'}}>
                <button onClick={() => setElephantVis(true)} style={{fontSize: '12px', color: '#666666', background: "none", padding: 0, border: "none"}}>
                    <u>Where's the elephant??</u>
                </button>
            </div>
            <FullPageRow style={elephantVis ? null : {display: 'none'}}>
                <Col md={4} lg={{span: 4, order: 1}} className="my-auto" style={{textAlign: 'center'}}>
                    <img src={origami_elephant} style={{width: '80%'}} alt="origami elephant"/>
                </Col>
                <Col md={4} lg={{span: 4, order: 2}} className="my-auto">
                    <h2>Elephant</h2>
                    <p>
                        Gotchu fam it's still here!!
                    </p>
                </Col>
            </FullPageRow>
        </Container>
    )
}