import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Clone v1</h1>
        <img src={logo} width={300} className="App-logo" alt="logo" />
        <div>
          <h2>Últimos Tweets</h2>
          <div className="tweet-container">
            {/* Cuando hacemos listas en React, se debe colocar un atributo "key" que sea único para que React pueda actualizar bien lo campos. Se suele usar un id. */}
            {tweets.map(({id, content, author, created_on}) => (
              <Tweet id={id} content={content} created_on={created_on} author={author} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

function Tweet(props){
  const {id, content, created_on, author} = props;
  return (
    <div className="tweet-item" key={id}>
      <p className="tweet-field id">{id}</p>
      <p className="tweet-field content">{content}</p>
      <p className="tweet-field author">{created_on} por <a href="#">@{author}</a></p>
    </div>
  )
}

export default App;
