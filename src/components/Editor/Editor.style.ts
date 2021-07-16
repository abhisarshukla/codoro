import { css } from "@emotion/react";

const StyleEditor = css`
    position: relative;

    textarea, pre {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        margin: 2px;
        padding: 2px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 1rem;
    }

    textarea {
        background-color: transparent;
        color: transparent;
        caret-color: black;
    }

    pre {
        pointer-events: none;
    }
`;

export {StyleEditor};