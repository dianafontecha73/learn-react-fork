// Importaciones de funciones, hojas de estilo, img, etc.
import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import meme from '/img/meme.png'
import './App.css'
import './Footer'
import Footer from './Footer'

// Definimos nuestras funciones
export const MiBoton = () => <button onClick={() => console.log("Click!")}>Click me</button>

const MyAwesomeDiv = () => {
  return (<div>My div is amazin' bruh</div>)
}

// función principal del componente que es el principal "return" del component y se llaman igual:
function App() {
  const [count, setCount] = useState(0)
  return (
    // Fragmento
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Primer React</h1>
      <MyAwesomeDiv/>
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
      </p>

      {/* Meme */}
      <div>
        <img src={meme} alt="meme" width={500}/>
        <br />
        <MiBoton/>
      </div>

      {/* Usamos Footer */}
      <Footer/>
    </>
  )
}
// Es necesario colocar export de la función principal, en este caso App, para que podamos utilizarla desde otro archivo
export default App
