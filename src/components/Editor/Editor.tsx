/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/atom-one-dark.css';

import { StyleEditor } from './Editor.style';
interface IProps {
    language: ULanguages,
    source: ISource,
    setSource: Dispatch<SetStateAction<ISource>>,
};

const Editor = ({language, source, setSource}: IProps) => {

    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.registerLanguage('html', html);
        hljs.registerLanguage('css', css);
    }, []);

    useEffect(() => {
        hljs.highlightAll();
    }, [source, language])

    /**
     * This function will handle updating the source state and setting replicatedValue in parent div
     * for proper rescaling of the editor.
     * @param e HTMLTextAreaElement.
     * 
     */
    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const currentSource = {
            ...source,
            [language]: e.currentTarget.value,
        };

        if(e.currentTarget.parentNode)
        (e.currentTarget.parentNode as HTMLElement).dataset.replicatedValue = source[language]; // Hacky since textarea cannot be resized based on its contents.

        setSource(currentSource);
    }

    return (
        <div css={StyleEditor}>
            <pre>
                <code className={`language-${language}`}>{source[language]}</code>
            </pre>
            <textarea
                value={source[language]}
                onChange={e => handleChange(e)}
                spellCheck={false}
            />
        </div>
    )
}

export default Editor;