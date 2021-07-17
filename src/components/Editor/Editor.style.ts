import { css } from "@emotion/react";

const StyleEditor = css`
    position: relative;
    overflow: auto;
    display: grid;

    &::after {
        content: attr(data-replicated-value) " ";
        white-space: pre-wrap;
        visibility: hidden;
    }

    textarea, pre, &::after {
        grid-area: 1 / 1 / 2 / 2;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 2px;
        line-height: 1.5em;
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        font-size: 1rem;
    }

    code {
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    }

    textarea {
        background-color: transparent;
        color: transparent;
        caret-color: black;
        min-height: fit-content;
        overflow: hidden;
        border: none;
        outline: none;
        resize: none;
    }
`;

export {StyleEditor};