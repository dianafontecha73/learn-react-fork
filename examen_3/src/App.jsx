import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')

  function handleTitle(e){
    setTitle(e.target.value)
    console.log(e.target.value)
  }
  function handleContent(e){
    setContent(e.target.value)
    console.log(e.target.value)
  }
  function handleTags(e){
    setTags(e.target.value)
    console.log(e.target.value)
  }
  function handleSubmit(e){
    alert("click!")
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
      <hr />
      <h2>Estados</h2>
      <p>Título: {title}</p>
      <p>Content: {content}</p>
      <p>Tags: {tags}</p>
    </>
  )
}

export default App
