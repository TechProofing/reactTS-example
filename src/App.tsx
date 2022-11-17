import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import { RoundedButton } from './components/RoundedButton';
import './App.css'

const URL = 'https://0dlae786mh.execute-api.us-east-2.amazonaws.com/request-url?fileName=boorman2.json&contentType=application%2Fjson&cacheControl=no-cache';

function App() {
  const [count, setCount] = useState(0);
  const [filename, setFilename] = useState();

  const onRoundedButtonClick = useCallback(() => {
    fetch(URL, { method: 'GET'}).then((response) => {
      response.json().then((json) => {
        setFilename(json.fileName);
      });
    })
  }, [setFilename]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <RoundedButton onClick={onRoundedButtonClick}>
          <h1>My BIG Button</h1>
          <h2>Slightly smaller</h2>
        </RoundedButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>Your filename is: {filename}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
