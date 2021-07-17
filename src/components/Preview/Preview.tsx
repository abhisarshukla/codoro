/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';

import { StylePreview } from './Preview.style';

interface IProps {
    source: {
        html: string;
        js: string;
        css: string;
    },
};

const Preview = ({source}: IProps) => {

    useEffect(() => {
        const preview: HTMLIFrameElement = document.getElementById('preview') as HTMLIFrameElement;
        if(preview) {
            const sourceCode = source.html + "<style>" + source.css + "</style><script>" + source.js + "</script>";
            const previewDocument = preview.contentWindow?.document;
            previewDocument?.open();
            previewDocument?.write(sourceCode);
            previewDocument?.close();
        }
    }, [source]);

    return (
        <div css={StylePreview}>
            <iframe src="" title="Preview Window" id="preview"></iframe>
        </div>
    )
}

export default Preview;