import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(''); // Estado para el título con hook useState
  const [content, setContent] = useState(''); // Estado para el contenido con hook useState
  const [tags, setTags] = useState(''); // Estado para las etiquetas con hook useState

  // Función que escribe el título en consola y actualiza el estado
  const handleTitle = (e) => {
    // Actualiza el estado
    setTitle(e.target.value); // e.target.value es el valor del input
    console.log(e.target.value);
  }

  // TODO:
  // handleContent
  // handleTags

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Crear Post</h1>
      </header>
      <div className="container">
        <form>
          
          <label>Titulo</label>
          <input type="text" placeholder="Titulo" onChange={handleTitle} />
          <br/>
          <label>Contenido</label>
          <textarea placeholder="Contenido" defaultValue="Escribe el contenido..."></textarea>
          <br/>
          <label>Etiquetas</label>
          <input type="text" placeholder="Etiquetas separadas por comas" />
          <br/>
          <button id="enviar-btn">Enviar</button>
        </form>
      </div>
    </div>
    <div>
      <h2>Datos</h2>
      <p>Titulo: {title}</p>
      <p>Contenido: {content}</p>
      <p>Etiquetas: {tags}</p>
    </div>
    </>
  );
}

export default App;
