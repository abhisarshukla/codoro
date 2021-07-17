/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Editor from './components/Editor';
import FileExplorer from './components/FileExplorer';
import Preview from './components/Preview';

import { StyleApp } from './App.style';

function App() {
  const [language, setLanguage] = useState<ULanguages>("html");
  const [source, setSource] = useState<ISource>({
      html: "",
      js: "",
      css: "",
  });
  return (
    <div css={ StyleApp }>
      <FileExplorer setLanguage={setLanguage} />
      <Editor language={language} source={source} setSource={setSource}/>
      <Preview source={source} />
    </div>
  );
}

export default App;
