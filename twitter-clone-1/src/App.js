import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json';
import Tweet from './Tweet';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import { LiaKiwiBirdSolid } from "react-icons/lia";

function App() {
  return (
    <div className="App">
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          } />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
    <div className='layout'>
    <header className="App-header">
    <div className='brand'>
        <h1><span style={{fontSize: "3rem"}}><LiaKiwiBirdSolid/></span> Twitter clone v1</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </nav>
      </header>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <main>
      <h2>Últimos tweets</h2>
        <div>
          {/* Añadimos el operador && para que en caso de que no haya tweets la expresión no se ejecute -> el div aparece sin contenido */}

          {/* TODO: hablar de esto */}
          {tweets && tweets.map(({id, content, created_on, author}) => (
            <Tweet key={id} author={author} content={content} created_on={created_on}/>
          ))}
        </div>
      </main>
    </div>
  );
}

const User = () => {
  // Use the useUser hook to get the Clerk.user object
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  console.log(user)

  return (<table style={{ margin: "0 auto"}}>
    <tr>
      <th>Propiedad</th>
      <th>Dato</th>
    </tr>
    <tr>
      <td>id:</td>
      <td>{user.id}</td>
    </tr>
    <tr>
      <td>username:</td>
      <td>{user.username}</td>
    </tr>
    <tr>
      <td>firstname:</td>
      <td>{user.firstName}</td>
    </tr>
    <tr>
      <td>lastname:</td>
      <td>{user.lastName}</td>
    </tr>
    <tr>
      <td>fullname:</td>
      <td>{user.fullName}</td>
    </tr>
    <tr>
      <td>emails:</td>
      <td>{user.emailAddresses.map( (email) => email.emailAddress )}</td>
    </tr>
    <tr>
      <td>profileImageUrl:</td>
      <td>
        <img src={user.profileImageUrl} width={150} />
        <br/>
        <a href={user.profileImageUrl} target='_blank'>{user.profileImageUrl}</a>
        </td>
    </tr>
  </table>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Datos del usuario que ha iniciado sesión</p>
      <h2>User:</h2>
      <User />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Error 404</h2>
      <p>
        No pudimos encontrar ese meme... <Link to="/">Volver a inicio</Link>
      </p>
    </div>
  );
}

export default App;
