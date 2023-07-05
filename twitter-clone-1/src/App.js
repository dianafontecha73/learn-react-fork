import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json';
import Tweet from './Tweet';

import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Clone v1</h1>
        <img src={logo} width={300} className="App-logo" alt="logo" />
      </header>
      {/* Routes nest inside one another. Nested route paths build upon
        parent route paths, and nested route elements render inside
        parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      
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

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <h2>Menú</h2>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">404</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Esto es el home</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Esto es el about</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Esto es el dashboard</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Error 404</h2>
      <p>
        Vaya, no pudimos encontrar lo que estabas buscando. ¿Quieres <Link to="/">Volver a Home</Link>?
      </p>
    </div>
  );
}
export default App;
