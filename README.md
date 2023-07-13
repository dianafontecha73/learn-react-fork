# learn-react
Repositorio para aprender React. 

1. Creación de proyecto (solo haced uno de estos a o b):

a.
```
  npm create vite
```
Opciones: `"blog" > React > Javascript`

b. Clonar proyecto:
```
  git clone https://github.com/cesarlpb/learn-react.git
```

---

2. Una vez creado o clonado. Comandos para iniciar proyecto:                       
```
  cd blog
  npm i 
  npm run dev
```

## Live Share

--- 

## Página de referencia

[Blog de viajes](https://www.viajeroscallejeros.com/)

## Componentes

```
<App>
  <Home>
    -- <Header> 
      -- <Navbar>   // Logo + Enlaces
    -- <HeroBanner> // a veces es slider
    -- <Posts>      // Últimos posts
    -- <Posts>      // Guías
    -- <Posts>      // Consejos
    -- <Footer>
      // 3 cols con enlaces
      // <p> Texto ._. </p>
```

## Bootstrap con React-Bootstrap
[Instalación](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
1. Instalar módulo:
```
  npm install react-bootstrap bootstrap
```
2. Pegar ejemplo con botones: https://react-bootstrap.netlify.app/docs/getting-started/introduction
3. Importar la hoja `bootstrap.min.css` en `main.jsx`:
```
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```