import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json';
import Tweet from './Tweet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Clone v1</h1>
        <img src={logo} width={300} className="App-logo" alt="logo" />
      </header>
    {/* TODO: Crear un componente <Main> */}
    <main>
      <div className="container">
        <h2>Últimos Tweets</h2>
        <div className="tweet-container">
          {/* key: Cuando hacemos listas en React, se debe colocar un atributo "key" que sea único para que React pueda actualizar bien lo campos. Se suele usar un id. */}
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </div>
      </div>
    </main>
    </div>
  );
}

export default App;
