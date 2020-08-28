import Row from "react-bootstrap/Row";
import React from "react";

export default function FullPageRow(props) {
    return (
        <Row {...props} className={"justify-content-md-center " + props.className} style={{...props.style, minHeight: '100vh'}}>
            {props.children}
        </Row>
    );
}