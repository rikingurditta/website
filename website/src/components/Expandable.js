import React, {useState} from 'react';

export default function Expandable(props) {
    let [expanded, setExpanded] = useState(false);
    return (
        <div style={props.style}>
            <span onClick={() => setExpanded(!expanded)}
                  style={{cursor: 'pointer', textDecoration: 'underline'}}>
                {props.outside} {expanded ? '-' : '+'}
            </span>
            <div hidden={!expanded}>
                {props.children}
            </div>
        </div>
    );
}