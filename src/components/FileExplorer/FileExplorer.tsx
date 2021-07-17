/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction } from 'react';

import { StyleFileExplorer } from './FileExplorer.style';

interface IProps {
    setLanguage: Dispatch<SetStateAction<ULanguages>>,
};

const FileExplorer = ({ setLanguage }: IProps) => {

    const hangleClick = (e: React.FormEvent<HTMLLIElement>, language: ULanguages) => {
        const FilesElement = document.getElementById('Files') as HTMLDivElement;
        if(FilesElement) {
            const allLi = FilesElement.querySelectorAll('li');
            allLi.forEach((li) => {
                li.classList.remove('selected')
            })
        }
        e.currentTarget.classList.add('selected');
        setLanguage(language);
    }

    return (
        <div id="Files" css={ StyleFileExplorer }>
            <ul>
                <li className="selected" onClick={e => hangleClick(e, "html")}>index.html</li>
                <li onClick={e => hangleClick(e, "css")}>index.css</li>
                <li onClick={e => hangleClick(e, "js")}>index.js</li>
            </ul>
        </div>
    );
}

export default FileExplorer;