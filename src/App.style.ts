import { css } from "@emotion/react";

const StyleApp = css`
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: 50px 1fr;
    height: 100vh;
    color: #abb2bf;
    background: #262831;
    header {
        font-family: 'Roboto Mono', monospace;
        font-size: 2.5rem;
    }
`;

export { StyleApp };