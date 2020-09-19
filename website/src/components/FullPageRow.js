import Row from "react-bootstrap/Row";
import React from "react";

export default function FullPageRow(props) {
    return (
        <Row {...props} className={"justify-content-md-center " + props.className}
             style={{...props.style, minHeight: 'calc(100vh - 56px)', padding: '25px 0 25px 0'}}>
            {props.children}
        </Row>
    );
}