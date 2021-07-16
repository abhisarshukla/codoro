/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/github.css';

import { StyleEditor } from './Editor.style';
interface IProps {
    language: ULanguages,
};

const Editor = ({language}: IProps) => {

    const [source, setSource] = useState({
        html: "",
        js: "",
        css: "",
    });

    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.registerLanguage('html', html);
        hljs.registerLanguage('css', css);
    }, []);

    useEffect(() => {
        hljs.highlightAll();
    }, [source, language])

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const currentSource = {
            ...source,
            [language]: e.currentTarget.value,
        };
        setSource(currentSource);
        console.log(currentSource);
    }

    const handleKeyDown = () => {
        //TODO
    }

    return (
        <div css={StyleEditor}>
            <pre>
                <code className={`language-${language}`}>{source[language]}</code>
            </pre>
            <textarea
                value={source[language]}
                onChange={e => handleChange(e)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
            />
        </div>
    )
}

export default Editor;