/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction } from 'react';

import { StyleFileExplorer } from './FileExplorer.style';

interface IProps {
    setLanguage: Dispatch<SetStateAction<ULanguages>>,
};

const FileExplorer = ({ setLanguage }: IProps) => {

    const hangleClick = (language: ULanguages) => {
        setLanguage(language);
    }

    return (
        <div css={ StyleFileExplorer }>
            <ul>
                <li onClick={e => hangleClick("html")}>index.html</li>
                <li onClick={e => hangleClick("css")}>index.css</li>
                <li onClick={e => hangleClick("js")}>index.js</li>
            </ul>
        </div>
    );
}

export default FileExplorer;