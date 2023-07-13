// import { useState } from 'react'
import logo from '/favicon.png'
import './App.css'
// import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
  <>
  <div id="home" className='border border-dark'>
    <h1>Home</h1>
    {/* Colocar etiquetas aqui */}
  </div>
  </>
)};

const Navbar = () => {
  return (
  <>
    <div>
      <img src={logo} alt="logo :)" width={150} />
      <h2>Navbar</h2>
    </div> 
  </>
)}
const Hero = () => {
  return (
  <>
    <p>Hero</p> 
  </>
)}

const Posts = () => {
  return (
  <>
    <p>Posts</p> 
    <p>Posts</p> 
    <p>Posts</p> 
  </>
)}

const Footer = () => {
  return (
  <>
    <p>Footer</p> 
  </>
)}
function App() {

  return (
    <>
      <Home />
      <Navbar />
      <Hero />
      <Posts />
      <Footer />
    </>
  )
}

export default App
