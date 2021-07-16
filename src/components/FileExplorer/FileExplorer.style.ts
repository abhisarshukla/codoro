import { css } from '@emotion/react';

const StyleFileExplorer = css`
    border: 1px solid #333;
    padding: 5px;
    margin: 1px;
    & ul {
        padding: 0px;
    }
    & ul li {
        margin: 2px 0px;
        padding: 2px 5px;
        cursor: pointer;
        text-indent: 0;
        background-color: #aa44aa;
        list-style-type: none;
    }
`;

export { StyleFileExplorer };