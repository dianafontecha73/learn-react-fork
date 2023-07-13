// import { useState } from 'react'
import logo from '/favicon.png'
import './App.css'
// import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
  <>
  <div id="home" className='border border-dark'>
    <header>
      <Navbar />
    </header>
    
  </div>
  </>
)};

const Navbar = () => {
  return (
  <>
    <div className='d-flex py-2 px-3 border border-danger justify-content-between align-items-center'>
      <div className='d-flex justify-content-between align-items-center'>
        <img  className='mx-2' src={logo} alt="logo :)" width={40} />
        <h2 className='mx-2' >Blog</h2>
      </div>
      <ul className='d-flex align-items-center m-0' style={{listStyleType: 'none', paddingLeft: 0}}>
        <li className='d-inline-block mx-3'><a href='#'>Link 1</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Link 2</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Link 3</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Link 4</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Link 5</a></li>
      </ul>
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
