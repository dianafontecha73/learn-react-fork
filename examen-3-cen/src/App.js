import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crear Post</h1>
      </header>
      <div className="container">
        <form>
          
          <label>Titulo</label>
          <input type="text" placeholder="Titulo" />
          <br/>
          <label>Contenido</label>
          <textarea placeholder="Contenido">Escribe el contenido...</textarea>
          <br/>
          <label>Etiquetas</label>
          <input type="text" placeholder="Etiquetas separadas por comas" />
        </form>
      </div>
    </div>
  );
}

export default App;
