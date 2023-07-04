import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter clone v0</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Últimos tweets</h2>
        <div>
          {/* Añadimos el operador && para que en caso de que no haya tweets la expresión no se ejecute -> el div aparece sin contenido */}
          {tweets && tweets.map((tweet) => (
           <div>
           {tweet.id} - 
           {tweet.content} - 
           {tweet.created_on} - 
           @{tweet.author}
           </div>
          ))}
          <p>
          
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
