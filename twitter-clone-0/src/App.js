import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json';
import TimeAgo from 'javascript-time-ago';
// Español
import es from 'javascript-time-ago/locale/es'

// Colocamos el formato en el que queremos las conversiones
TimeAgo.addDefaultLocale(es)

// Creamos formatter (Español).
const timeAgo = new TimeAgo('es-ES');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter clone v0</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
      <h2>Últimos tweets</h2>
        <div>
          {/* Añadimos el operador && para que en caso de que no haya tweets la expresión no se ejecute -> el div aparece sin contenido */}
          {tweets && tweets.map(({id, content, created_on, author}) => (
            <Tweet key={id} author={author} content={content} created_on={created_on}/>
          ))}
        </div>
      </main>
    </div>
  );
}

function Tweet(props){
  const { id, content, author, created_on } = props

  return(
  <div className="tweet-container" key={id}>
    <p className="tweet-title">{id}</p>  
    <p className="tweet-content">"{content}"</p>
    <p className="tweet-footer">{timeAgo.format(new Date(created_on))} ·&nbsp;<strong>@{author}</strong>
  </p>
 </div>
)}
export default App;
