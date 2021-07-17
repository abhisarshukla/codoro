import { css } from '@emotion/react';

const StyleFileExplorer = css`
    outline: 1px solid #abb2bf;
    padding: 5px;
    margin: 0px;
    grid-area: 2 / 1 / 3 / 2;
    font-family: 'Roboto Mono', monospace;
    & ul {
        padding: 0px;
    }
    & ul li {
        margin: 5px 0px;
        padding: 5px 10px;
        cursor: pointer;
        text-indent: 0;
        background-color: #262831;
        list-style-type: none;
        border-radius: 3px;
        transition: padding-left ease-in 100ms;
    }
    .selected {
        padding-left: 30px;
        background-color: #313440;
    }
`;

export { StyleFileExplorer };