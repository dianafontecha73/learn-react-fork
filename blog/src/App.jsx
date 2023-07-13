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
    <main>
      <Hero />
    </main>
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
  // Fuente: https://mdbootstrap.com/docs/react/extended/hero/
  return (
  <>
  <div
    className='p-0 text-center bg-image border-danger'
    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
      <div className='mask' style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>Heading</h1>
            <h4 className='mb-3'>Subheading</h4>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
              Call to action
            </a>
          </div>
        </div>
      </div>
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
      <Hero />
      <Posts />
      <Footer />
    </>
  )
}

export default App
