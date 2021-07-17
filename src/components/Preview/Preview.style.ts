import { css } from '@emotion/react';
const StylePreview = css`
    display: flex;
    grid-area: 2 / 3 / 3 / 4;
    iframe {
        flex-grow: 1;
        color: black;
        background: white;
        border: none;
        outline: 1px solid #abb2bf;
    }
`;

export { StylePreview };