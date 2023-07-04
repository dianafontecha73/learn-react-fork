import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Clone v0</h1>
        <img src={logo} width={300} className="App-logo" alt="logo" />
        <div>
          <h2>Últimos Tweets</h2>
          <div className="tweet-container">
            {tweets.map((tweet) => (
              <div className="tweet-item">
                <p className="tweet-field id">#{tweet.id}</p>
                <p className="tweet-field content">{tweet.content}</p>
                <p className="tweet-field author">{tweet.author}</p>
                </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
