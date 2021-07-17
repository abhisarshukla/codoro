const demo: ISource = {
    html:
`<div class="pulse">
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
</div>`,
    css: 
`body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #1f3244;
}

.pulse {
    background-color: coral;
    height: 20vmax;
    width: 20vmax;
    border-radius: 100%;
    position: relative;
}

.ring {
    position: absolute;
    background-color: inherit;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    opacity: 0.8;
    -webkit-animation: pulsing 2s ease-out infinite;
            animation: pulsing 2s ease-out infinite;
}
.ring:nth-of-type(1) {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
}
.ring:nth-of-type(2) {
    -webkit-animation-delay: -1s;
            animation-delay: -1s;
}
.ring:nth-of-type(3) {
    -webkit-animation-delay: -1.5s;
            animation-delay: -1.5s;
}

@-webkit-keyframes pulsing {
    100% {
        transform: scale(1.75);
        opacity: 0;
    }
}

@keyframes pulsing {
    100% {
        transform: scale(1.75);
        opacity: 0;
    }
}`,
    js: ``,
}

export { demo };