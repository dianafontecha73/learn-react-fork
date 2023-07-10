import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Crear Post</h1>
      <form style={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
        <label>Título:</label>
        <input 
        placeholder='Esto es un título :)' 
        style={{width: '300px'}} 
        onChange={() => console.log("título")}/>
        <label>Contenido:</label>
        <textarea 
        style={{width: '300px', height: '150px'}}
        defaultValue="Hola" 
        onChange={() => console.log("content")}></textarea>
        <label>Etiquetas:</label>
        <input 
        placeholder='post, post, post' 
        style={{width: '300px'}} 
        onChange={() => console.log("tags")}/>
        <button 
        style={{marginTop: '10px', backgroundColor: "lightsalmon"}} 
        onClick={() => alert("enviado!")}>Enviar</button>
      </form>
    </>
  )
}

export default App
