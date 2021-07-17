/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Editor from './components/Editor';
import FileExplorer from './components/FileExplorer';
import Preview from './components/Preview';
import logo from './logo.svg';
import { demo } from './setupDemo';
import { StyleApp } from './App.style';

function App() {
  const [language, setLanguage] = useState<ULanguages>("html");
  const [source, setSource] = useState<ISource>(demo);
  return (
    <div css={ StyleApp }>
      <header>
        <img src={logo} alt="Codoro logo" height="45px"></img>
        <span className="codoro">Codoro_</span>
      </header>
      <FileExplorer setLanguage={setLanguage} />
      <Editor language={language} source={source} setSource={setSource}/>
      <Preview source={source} />
    </div>
  );
}

export default App;
