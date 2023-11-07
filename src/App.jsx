import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ButtonText from "./components/general/buttonText";

function App() {
  const [count, setCount] = useState(0);
  const [trigger, setTrigger] = useState(false);

  function trueOrFalse(type) {
    setTrigger(!trigger);
    console.log(type);
  }
  return (
    <>
      <div>
        <ButtonText
          shape="rounded-2xl"
          backgroundColor="green-500"
          text="oke nha"
          onSelected={() => trueOrFalse("aloooo")}
        />
        <p>{trigger ? "alo" : "alo2"} text</p>
      </div>
    </>
  );
}

export default App;

// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function ButtonText() {
//   const [count1, setCount1] = useState(false);

//   function setBoolean() {
//     setCount1(!count1);
//     console.log("alo");
//   }

//   return (
//     <div className="buttonText">
//       <button onClick={setBoolean}>
//         {count1 ? <span>alo</span> : <span>alo2</span>} text1
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <ButtonText />

//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount(count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
