import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleTitle(e){
    console.log(e.target.value)
  }
  function handleContent(e){
    console.log(e.target.value)
  }
  function handleTags(e){
    console.log(e.target.value)
  }
  function handleSubmit(e){
    console.log("click!")
  }
  return (
    <>
      <h1>Crear Post</h1>
      <form style={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
        <label>Título:</label>
        <input 
        placeholder='Esto es un título :)' 
        style={{width: '300px'}} 
        onChange={handleTitle}/>
        <label>Contenido:</label>
        <textarea 
        style={{width: '300px', height: '150px'}}
        defaultValue="Hola" 
        onChange={handleContent}></textarea>
        <label>Etiquetas:</label>
        <input 
        placeholder='post, post, post' 
        style={{width: '300px'}} 
        onChange={handleTags}/>
        <button 
        style={{marginTop: '10px', backgroundColor: "lightsalmon"}} 
        onClick={handleSubmit}>Enviar</button>
      </form>
    </>
  )
}

export default App
