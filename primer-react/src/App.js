import './App.css';

// Componente Footer
function Footer() {
  // lógica del componente
  return (
    <footer id='footer'>
      <p>Este es el pie de página desde el componente.</p>
    </footer>
  )
}

function App() {
  return (
    <>
    <div className='container'>
      <h1>Primer React</h1>
      <p>Este es el componente <code>App</code>.</p>
      <Footer />
    </div>
    </>
  );
}

export default App;
