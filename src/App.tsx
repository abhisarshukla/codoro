/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Editor from './components/Editor';
import FileExplorer from './components/FileExplorer';

import { StyleApp } from './App.style';

function App() {
  const [language, setLanguage] = useState<ULanguages>("html");
  return (
    <div css={ StyleApp }>
      <FileExplorer setLanguage={setLanguage} />
      <Editor language={language} />
    </div>
  );
}

export default App;
