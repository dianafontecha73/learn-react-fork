// import { useState } from 'react'
import logo from '/corazon1.png'
import './App.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cristalina from '/cristalina.jpg';
import isla from '/isla.jpg';
import margarita from '/margarita.jpg';

const Home = () => {
  return (
  <>
  <div id="home" className=''>
    <header>
      <Navbar />
    </header>
    <main>
      <Hero/><PostContainer/>
      <PostContainer/>
      <PostContainer/>
      {/* <Hero />
      <Posts title="Últimos Posts" />
      <Posts title="Guías" />
      <Posts title="Consejos" /> */}
      <Footer />
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
        <li className='d-inline-block mx-3'><a href='#'>Historia </a></li>
        <li className='d-inline-block mx-3'><a href='#'>Geografía</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Flora</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Fauna</a></li>
        <li className='d-inline-block mx-3'><a href='#'>Gastronoía</a></li>
      </ul>
    </div> 
  </>
)}
const Hero = () => {
  // Fuente: https://mdbootstrap.com/docs/react/extended/hero/
  return (
  <>
  <div
    className='hero-header p-0 text-center bg-image widht 1280vw'
  >
      <div className='mask' style={{ height: '100%', width: '100%' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-blue'
          style={{width: '100%', padding: '10px'}}>
            <h1 className='mb-3' style={{fontSize: '6rem', 
            // backgroundColor:'rgba(0,0,0,0.30)'
          }}>Venezuela</h1>
            <h4 className='mb-3' style={{fontSize: '3rem'}}>Turismo Tropical</h4>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
              Descubre Más
            </a>
          </div>
        </div>
      </div>
  </div> 
  </>
)}
// Renombrar

const PostContainer = () => {
  
  return (
  
  <div className='container py-3'>
    
    <PostText id="1"/>
    <PostText id="2"/>
    
  </div>
  
)}

const PostText = (props) => {
  const { id } = props;
  console.log(id)
  if(id == 1){
    return (<>
    <h2>VENEZUELA</h2>
    <p>Oficialmente República Bolivariana de Venezuela, es un país soberano situado en la parte septentrional de América del Sur, constituido por un área continental y por un gran número de islas e islotes en el mar Caribe, cuya capital y mayor aglomeración urbana es la ciudad de Caracas.

    Posee una extensión territorial de 916 445 km². El territorio continental limita al norte con el mar Caribe y el océano Atlántico, al oeste con Colombia, al sur con Brasil y por el este con Guyana. Con este último país, el Estado venezolano mantiene una reclamación sobre 159 542 km² de territorio al oeste del río Esequibo, esta área es conocida como Guayana Esequiba o Zona en Reclamación, anteriormente bajo el control de Guayana Neerlandesa. Por sus espacios marítimos, ejerce soberanía sobre 71 295 km² de mar territorial, 22 224 km² en su zona contigua, 471 507 km² del mar Caribe y del océano Atlántico bajo el concepto de zona económica exclusiva, y 99 889 km² de plataforma continental. Esta zona marina limita con las de trece Estados. El país tiene una biodiversidad muy alta y ocupa el séptimo lugar en la lista mundial de naciones con mayor cantidad de especies. Existen hábitats que van desde las montañas de los Andes en occidente hasta la selva tropical de la cuenca del Orinoco en el sur, a través de las extensas planicies de los Llanos, la costa del Caribe y el delta del río Orinoco en el oriente.
    </p>
  </>)
  }
  // ...
  else{ return <>vacío</>}

}
const Footer = () => {
  // Fuente: https://mdbootstrap.com/docs/standard/navigation/footer#subsection-links
  return (
  <>
  <div className='border border-danger'>
  <footer  className="text-center text-lg-start" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
  
  <div  className="container py-4" >
    <div  className="row"> 
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <img  className='mx-2' src={cristalina} alt="playa :)" width={200} />
        <h5  className="text-uppercase text-center">Historia</h5>
        <ul  className="list-unstyled text-center mb-0">
          <li>
            <a href="#!"  className="text-dark">Época Indígena</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Colonización</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Independencia</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Democracia</a>
          </li>
        </ul>
      </div>
       
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <img  className='mx-2' src={isla} alt="playa :)" width={200} />
        <h5  className="text-uppercase text-center mb-0">Geografía</h5>
        <ul  className="list-unstyled text-center">
          <li>
            <a href="#!"  className="text-dark">Límites</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">División Territorial</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">División Poblacional</a>
          </li>
          <li>
            <a href="#!"  className="text-dark"></a>
          </li>
        </ul>
      </div>
    
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <img  className='mx-2' src={margarita} alt="playa :)" width={220} />
        <h5  className="text-uppercase text-center">Flora y Fauna</h5>
        <ul  className="list-unstyled text-center mb-0">
          <li>
            <a href="#!"  className="text-dark">Flora y Fauna Nacional</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Flora y Fauna por Regiones</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Diversidad Natural</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Recursos Naturales</a>
          </li>
        </ul>
      </div>
    
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <img  className='mx-2' src={margarita} alt="playa :)" width={220} />
        <h5  className="text-uppercase text-center mb-0">Gastronomía</h5>
        <ul  className="list-unstyled text-center">
          <li>
            <a href="#!"  className="text-dark">Plato Típico Nacional</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Gastronomía por Región</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Diversidad gastronómica</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Empresas Alimenticias</a>
          </li>
        </ul>
      </div>
    </div> 
  </div>

  <div  className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2023 Copyright:&nbsp;
    <a  className="text-dark" href="#!">MiBlog.com</a>
  </div>
  
</footer> 
  </div>
  </>
)}

function App() {

  return (
    <>
      <Home/>
    </>
  )
}

export default App
