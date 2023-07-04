# learn-react - CEN

## Proyectos

[primer-react](./primer-react/)

Proyecto creado con `npx create-react-app primer-react`. Se puede usar en Github con la [imagen de React en Codespaces](https://github.com/github/codespaces-react). Estos codespaces se pueden guardar como respositorios.

## Estructura de archivos

```
  primer-react
    node_modules
    public
      index.html
      favicon.ico
    src
      App.css
      App.js
      App.test.js
      index.css
      index.js
      logo.svg
      reportWebVitals.js
      setupTests.js
    .gitignore
    package-lock.json
    package.json
    README.md
```

  - `node_modules`: contiene las dependencias del proyecto.
  - `public`: contiene los archivos estáticos del proyecto.
    `index.html`: es el archivo principal del proyecto. Aquí podemos colocar metatags, estilos previos a la carga de React (spinner), etc. **Es el único HTML de todo el proyecto**. Por eso se le llama **Single Page Application**. Por eso no se puede hacer SEO con React, para eso se necesita `NextJS`.
  - `src`: contiene los archivos fuente del proyecto.
    - `App.js`: es el componente principal del proyecto.
    - `index.js`: es el punto de entrada del proyecto.

## Referencias

- W3schools: https://www.w3schools.com/react/react_getstarted.asp
- Tutorial de Twitter clone: https://nicotsou.com/react-twitter-clone/