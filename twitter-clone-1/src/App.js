import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json';
import Tweet from './Tweet';

import { Routes, Route, Outlet, Link } from "react-router-dom";
// Componentes de Clerk
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

function App() {
  return (
    <>
    {/* SignedIn se ve cuando se ha iniciado sesión */}
    <SignedIn>
      <div className="App">
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
      </div>
    </SignedIn>

    {/* Cuando no tienes sesión iniciada -> redirige a iniciar sesión */}
    <SignedOut>
      {/* TODO: Pantalla de bienvenida y un enlace a /signin donde salga el formulario de inicio de sesión o registro */}
      {/* <h1>Iniciar sesión</h1> */}
      <RedirectToSignIn />
    </SignedOut>
    </>
  );
}
function Header(){
  return (
    <header className="App-header">
      <div className='brand'>
        <h1>Twitter Clone v1</h1>
        <img src={logo} width={300} className="App-logo" alt="logo" />
      </div>
      <nav>
        <ul className='navbar'>
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
        <div>
          <UserButton />
        </div>
      </nav>
    </header>
  )}
function Layout() {
  return (
    <div className="layout">
      {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. 
      
      Este componente aparece en todas las páginas  
      */}

      <Header/>

      {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. 
      
        El Outlet es el componente que se encarga de renderizar el contenido de las rutas hijas. -> <Home>, <About>, <Dashboard>, <NoMatch>, etc.
        */}
      <Outlet />

      <Footer/>
    </div>
  );
}

function Footer(){
  return (
    <footer className='footer'>
      <p>Este es el footer de Layout</p>
    </footer>
  )
}
function Home() {
  return (
    <div>
      {/* TODO: Crear un componente <Main> */}
      <main>
        <h2>Home</h2>
        <p style={{color: "white"}}>Esto es el home</p>
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

const escribirPropiedades = (user) => {
  let keys = Object.keys(user);
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    if(typeof(user[keys[i]]) != 'function'){
      obj[keys[i]] = user[keys[i]];
    }
  }
  return console.log(obj)
}
const Greeting = () => {
  // Use the useUser hook to get the Clerk.user object
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }
  return (
  <>
  <h2>Usuario desde useUSer</h2>
  <p>Hola, {user.firstName}</p>
  <ul>
    <li>id: {user.id}</li>
    <li>Nombre: {user.firstName}</li>
    <li>Apellidos: {user.lastName}</li>
    <li>Nombre completo: {user.fullName}</li>
    <li>
      Imagen de perfil: {user.imageUrl}
      <img src={user.profileImageUrl} width={300}/>
    </li>
    <li>Username: {user.username}</li>
  </ul>
  {escribirPropiedades(user)}
  </>
  )}

function About() {
  return (
    <div className='about' style={{paddingBottom: "75px"}}>
      <h2>About</h2>
      <p>Esto es el about</p>
      <p>Acerca de</p>
      <Greeting />
    </div>
  );
}

function Dashboard() {
  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <p>Esto es el dashboard</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div className='nomatch'>
      <h2>Error 404</h2>
      <p>
        Vaya, no pudimos encontrar lo que estabas buscando. ¿Quieres <Link to="/">Volver a Home</Link>?
      </p>
    </div>
  );
}
export default App;
