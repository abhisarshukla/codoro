import { css } from "@emotion/react";

const StyleEditor = css`
    position: relative;
    overflow: auto;
    display: grid;
    grid-area: 2 / 2 / 3 / 3;
    outline: 1px solid #abb2bf;
    background-color: #282c34;

    &::after {
        content: attr(data-replicated-value) " ";
        white-space: pre-wrap;
        visibility: hidden;
    }

    textarea, pre, &::after {
        grid-area: 1 / 1 / 2 / 2;
        padding: 10px;
        margin: 0px;
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
        caret-color: #abb2bf;
        min-height: fit-content;
        overflow: hidden;
        border: none;
        outline: none;
        resize: none;
    }
`;

export {StyleEditor};