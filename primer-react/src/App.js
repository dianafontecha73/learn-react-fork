import './App.css';
import image from './img/ops.jpeg';

// Componente Footer
function Footer() {
  // lógica del componente
  return (
    <footer id='footer'>
      <p>Este es el pie de página desde el componente.</p>
    </footer>
  )
}

function Image(){
  return (
    <img src={image} width={250} alt='Ops' />
  )
}

function App() {
  return (
    <>
    <div className='container'>
      <h1>Primer React</h1>
      <p>Este es el componente <code>App</code>.</p>
      <p>Nueva línea.</p>
      <Image />
      <Footer />
    </div>
    </>
  );
}

export default App;
