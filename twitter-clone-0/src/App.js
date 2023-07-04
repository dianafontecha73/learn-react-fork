import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json';

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
          {tweets && tweets.map((tweet) => (
           <div className="tweet-container" key={tweet.id}>
            <p className="tweet-title">{tweet.id}</p>  
            <p className="tweet-content">{tweet.content}</p>
            <p className="tweet-footer">{tweet.created_on} · <strong>@{tweet.author}</strong>
            </p>
           </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
