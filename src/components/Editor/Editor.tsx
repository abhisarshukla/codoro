import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/github.css';
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
        <div className="code-edit-container">
            {language}
            <textarea
                value={source[language]}
                onChange={e => handleChange(e)}
                onKeyDown={handleKeyDown}
            />
            <pre className="code-output">
                <code className={`language-${language}`}>{source[language]}</code>
            </pre>
        </div>
    )
}

export default Editor;