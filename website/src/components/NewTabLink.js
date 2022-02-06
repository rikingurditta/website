import React from "react";

export default function NewTabLink(props) {
    return (
        <a {...props} target="_blank" rel="noopener">
            {props.children}
        </a>
    );
}