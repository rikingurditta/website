import React from 'react';
import Container from "react-bootstrap/Container";
import FullPageRow from "../components/FullPageRow";
import Col from "react-bootstrap/Col";
import TitleRow from "../components/TitleRow";

let soundcloud_div_style = {
    fontSize: '10px',
    color: '#cccccc',
    lineBreak: 'anywhere',
    wordBreak: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans -serif',
    fontWeight: '100',
};


export default function Projects(props) {
    return (
        <Container fluid>
            <TitleRow style={{backgroundColor: '#DDDDFF'}}>
                <Col md={4} className="my-auto">
                    <h1>Projects</h1>
                    <h3>I do a lot of stuff</h3>
                </Col>
                <Col md={4} className="my-auto">
                    <img alt="pic of stuff i do"/>
                </Col>
            </TitleRow>
            <FullPageRow>
                <Col md={4} className="my-auto">
                    <iframe width="400px" height="400px" scrolling="no" frameBorder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/487898616&color=%236c4149&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    <div style={soundcloud_div_style}>
                        <a href="https://soundcloud.com/chocolate-milk-music" title="Chocolate Milk" target="_blank"
                           style={{color: '#cccccc', textDecoration: 'none',}}>Chocolate Milk</a> · <a
                        href="https://soundcloud.com/chocolate-milk-music/presidents" title="Presidents" target="_blank"
                        style={{color: '#cccccc', textDecoration: 'none'}}>Presidents</a></div>
                </Col>
                <Col md={4} className="my-auto">
                    <h2>Music</h2>
                    <p>I've been producing electronic music and hip hop for a long ass time. Here's something I dropped a couple years ago,
                    it samples Nas's verses from <i>The World Is Yours</i> as well as clips of Brian Kernighan and DJ Premier.<br/><br/>
                    <a href="https://soundcloud.com/chocolate-milk-music">Here's my SoundCloud</a></p>
                </Col>
            </FullPageRow>
        </Container>
    );
}