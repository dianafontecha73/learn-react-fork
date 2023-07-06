import { useState, useEffect } from "react";
import logo from './assets/img/logo.png';
import './App.css';
// import tweets from './assets/json/tweets.json';
import Tweet from './Tweet';
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import { LiaKiwiBirdSolid } from "react-icons/lia";

import { Button, Input } from 'antd';
const { TextArea } = Input;

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
          <Route
          path="/tweets/:id"
          loader={({ params }) => {
            console.log(params.id); // 1, 2, 3...
          }}
          action={({ params }) => {}}
          element={<TweetPage />}
          />;
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function TweetPage(){
  let params = useParams();

  const [tweetId, setTweetId] = useState(params.id)
  const [tweet, setTweet] = useState({})

  useEffect(() => {
    // IDEA: poner una condición para que pida los tweets cada 1, 5 o 10 min como mínimo
    const fetchTweetById = () => {
      fetch("https://79.143.92.203:3000/api/cdm/tweets/" + tweetId)
        .then(response => {
          return response.json()
        })
        .then(tweet => {
          setTweet(tweet);
          console.log(tweet);
        })
    }
    fetchTweetById()
  }, []);
  return (
  <>
  <div style={{ color: "white"}}>
    <h2>Tuit #{params.id}</h2>
    {/* {tweet && <Tweet {...tweet} />} */}
    {tweet && Object.keys(tweet).length > 0 
    ? <Tweet {...tweet} /> 
    : <div><div className="spinner"></div><p>Cargando tweet...</p></div>}
  </div>
  </>
    )
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

function TweetForm(){

  const [contador, setContador] = useState(0); // hook!

  const handleTextArea = (e) => {
    console.log(e.target.value)
  }
  const handleCounter = () => {
    setContador(contador => contador + 1)
    console.log(contador + 1)
  }
  return (
    <>
    {/* TODO: Hacer clases :) */}
    <div style={{ width: "50%", margin: "10px auto", padding: "10px"}}>
      <form>
        <TextArea 
        rows={4} 
        maxLength={150} 
        placeholder='🐦¿Qué está pasando?🐦'
        onChange={handleTextArea}
        />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "5px", alignItems: "center"}}>
        <p style={{color:"white"}}>Abre consola y escribe algo :)</p>
        <Button type="primary">Tuit! <LiaKiwiBirdSolid/></Button>
        </div>
      </form>
      <div>
      <Button type="primary" onClick={handleCounter}>Clicks: {contador}</Button>
      </div>
    </div>
    </>
  )
}

function Home() {

  const [tweets, setTweets] = useState([])

  useEffect(() => {
    // IDEA: poner una condición para que pida los tweets cada 1, 5 o 10 min como mínimo
    const fetchTweets = () => {
      fetch("https://79.143.92.203:3000/api/cdm/tweets")
        .then(response => {
          return response.json()
        })
        .then(tweets => {
          setTweets(tweets)
        })
    }
    fetchTweets()
  }, []);

  return (
    <div style={{paddingBottom: "10px", marginBottom: "0", backgroundColor: "#282c34"}}>
      <h2>Home</h2>
      <main style={{ width: "100vw"}}>
      {/* TODO: Revisar T_T */}
      {/* <TweetForm /> */}
      <h2>Últimos tweets</h2>
        <div style={{width: "100%"}}>
          {/* Añadimos el operador && para que en caso de que no haya tweets la expresión no se ejecute -> el div aparece sin contenido */}

          {/* TODO: hablar de esto */}
          {tweets && tweets.map(({id, content, created_on, author}) => (
            <Tweet 
              key={id} 
              id={id} 
              author={author} 
              content={content} 
              created_on={created_on}/>
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
