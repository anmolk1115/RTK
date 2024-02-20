import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import UseLocationDemo from './components/UseLocationDemo';
import Product from './components/Product';
import Jupiter from './components/JupiterLogs';
// export const ColorContext = React.createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<AddUser />} />
          <Route exact path='/delete' element={<DeleteUser />} />
          <Route exact path='/location' element={<UseLocationDemo />} />
          <Route path='/location/:user' element={<UseLocationDemo />} />
          <Route path='/product' element={<Product />} />
          <Route path='/logs' element={<Jupiter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
