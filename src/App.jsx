import { useState } from 'react'
import './App.css'
import ButtonText from './components/general/buttonText'

function App() {
  const [count, setCount] = useState(0)
  const handleButtonClick = () => {
    setCount((count) => count + 1)
    alert('Button Clicked!');
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ButtonText
        title="Mân Đàn"
        shape="rounded"
        width={150}
        height={40}
        backgroundColor="blue"
        textColor="white"
        leftIconPath=""
        rightIconPath=""
        onClick={handleButtonClick}
      />
    </>
  )
}

export default App
