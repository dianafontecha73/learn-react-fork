// Versión con componentes de Home
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
    <div className='border border-danger'>
      <img src={logo} alt="logo :)" width={150} />
      <h2>Navbar</h2>
    </div> 
  </>
)}
const Hero = () => {
  return (
  <>
  <div className='border border-danger'>
    <p>Hero</p> 
  </div>
  </>
)}
const Posts = () => {
  return (
  <>
  <div className='border border-danger'>
    <p>Posts</p> 
    <p>Posts</p> 
    <p>Posts</p>
  </div>
  </>
)}
const Footer = () => {
  return (
  <>
  <div className='border border-danger'>
    <p>Footer</p> 
  </div>
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
