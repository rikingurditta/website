import Row from "react-bootstrap/Row";
import React from "react";

export default function TitleRow(props) {
    return (
        <Row {...props} className={"justify-content-md-center " + props.className} style={{...props.style, minHeight: '30vh'}}>
            {props.children}
        </Row>
    );
}