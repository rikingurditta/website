import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import FullPageRow from "../components/FullPageRow";
import Col from "react-bootstrap/Col";
import TitleRow from "../components/TitleRow";
import compile from "../TSRegex/js/compiletest";
import {wellFormedBrackets} from "../TSRegex/js/Lexical";

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
    let startRe = '\\w(i)([dgiknru]| ){8}\\1t{2}a+.*!?';
    let startString = 'rikin gurditta is cool!';

    let [justLoaded, setJustLoaded] = useState(true);
    let [accepted, setAccepted] = useState('');
    let [inputRegex, setInputRegex] = useState(startRe);
    let [inputText, setInputText] = useState(startString);

    function handleRegexChange(event) {
        let newRe = event.target.value;
        if (newRe !== inputRegex) {
            updateAccepted(newRe, inputText)
        }
        setInputRegex(newRe);

    }

    function handleTextChange(event) {
        setInputText(event.target.value);
        updateAccepted(inputRegex, event.target.value);
    }

    function updateAccepted(regex, text) {
        if (regex === '' || text === '') {
            setAccepted('');
        } else if (!wellFormedBrackets(regex)) {
            setAccepted('invalid regex');
        } else {
            console.log('regex:', regex);
            console.log('string:', text);
            let nfa = compile(regex).getNFA();
            console.log(nfa);
            setAccepted('' + nfa.checkString(text));
        }
    }

    if (justLoaded) {
        updateAccepted(startRe, startString);
        setJustLoaded(false);
    }

    return (
        <Container fluid>
            <TitleRow style={{backgroundColor: '#DDDDFF'}}>
                <Col md={4} className="my-auto">
                    <h1>Projects</h1>
                </Col>
                <Col md={4}/>
            </TitleRow>
            <FullPageRow>
                <Col md={4} className="my-auto">
                    <h2>Regular Expression Compiler</h2>
                    <p>
                        My theory of computation class briefly mentioned <a
                        href="https://en.wikipedia.org/wiki/Thompson%27s_construction" target="_blank">Thompson's
                        algorithm</a>. It seemed interesting, so I decided to implement it as a compiler for a subset of
                        Perl RegEx. It supports quantifiers with <code>{"re{m,n}"}?+*</code>, character groups
                        with <code>[chars]</code>, union with <code>a|b</code>, the wildcards <code>.\w\d</code>, and
                        capture groups with <code>(parentheses)</code>.
                    </p>
                    <p>
                        <a href="https://github.com/rikingurditta/TSRegex" target="_blank">Here's</a> the GitHub repo!
                    </p>
                </Col>
                <Col md={4} className="my-auto">
                    <h4>Try it out!</h4>
                    <p>
                        Regex:
                        <br/>
                        <input value={inputRegex} onChange={handleRegexChange}
                               style={{width: '100%', fontFamily: 'monospace'}}/>
                    </p>
                    <p>
                        Text:
                        <br/>
                        <input value={inputText} onChange={handleTextChange} style={{width: '100%'}}/>
                    </p>
                    <p>
                        Accepted: <b><span
                        style={{color: accepted === 'true' ? '#11DD11' : '#FF1111'}}>{accepted}</span></b>
                    </p>
                </Col>
            </FullPageRow>
            <FullPageRow style={{backgroundColor: '#EEEEFF'}}>
                <Col md={4} className="my-auto">
                    <iframe width="100%" height="350px" scrolling="no" frameBorder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/487898616&color=%236c4149&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                    <div style={soundcloud_div_style}>
                        <a href="https://soundcloud.com/chocolate-milk-music" title="Chocolate Milk" target="_blank"
                           style={{color: '#cccccc', textDecoration: 'none',}}>Chocolate Milk</a> · <a
                        href="https://soundcloud.com/chocolate-milk-music/presidents" title="Presidents" target="_blank"
                        style={{color: '#cccccc', textDecoration: 'none'}}>Presidents</a></div>
                </Col>
                <Col md={4} className="my-auto">
                    <h2>Music</h2>
                    <p>
                        I've been producing electronic music and hip hop for a really long time. Here's something I
                        dropped a couple years ago, it samples Nas's verses from <i>The World Is Yours</i> as well as
                        clips of Brian Kernighan and DJ Premier.
                    </p>
                    <p>
                        <a href="https://soundcloud.com/chocolate-milk-music" target="_blank">Here's</a> my SoundCloud!
                    </p>
                </Col>
            </FullPageRow>
        </Container>
    );
}