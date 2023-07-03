# learn-react
Repositorio para aprender React

## ¿Why Vite?

- Tradicionalmente, se ha usado `npx create-react-app` pero es muy lento y tarda mucho en cargar el servidor de desarollo.
- Las mejores alternativas son:
  - Vite -> `yarn create vite` o
  - Next -> `npx create-next-app`

## Primeros pasos
1. Instalar `yarn` en global:
```
npm install -g yarn
```
**Nota:** Si estás usando `Powershell`, cambia a `cmd`.
Verificar que tenemos `yarn` instalado:
```
yarn --version
```
2. Iniciamos un proyecto de React:
```
yarn create vite
```
3. Elegimos nombre del proyecto, en mi caso `primer-react`
4. Elegimos `React` y `Javascript`
5. Ejecutamos los comandos que aparecen en la consola en orden, en mi caso:
```
cd primer-react
```
Descargamos los archivos necesarios:
```
yarn
```
Iniciamos el proyecto:
```
yarn dev
``` 
## Estructura de archivos
```
primer-react
  public
    vite.svg
    react.svg
  src
  index.html
  .eslintrc.cjs
  vite.config.js
  .gitignore
  package.json
```

- **node_modules** -> librerías/módulos de npm, yarn, etc. 
- **public** -> assets que se pueden presentar en la páginas (SVG, JPG, PNG...)
- **src** -> "source" del proyecto, es donde suelen estar los principales archivos
  - **assets** -> aquí podemos colocar más imágenes, media, etc.
  - **App.css** -> hoja de estilos del componente `App.jsx` o `App.js`
  - **App.jsx** -> componente `App` -> página de inicio
  - **index.css** -> hoja de estilos principal
  - **main.jsx** -> componente principal que crea el elemento `root` del proyecto
    
### Prioridad en hojas de estilo

- Mismo selector -> tiene prioridad el `index.css` respecto del `App.css`
- `inline` sigue teniendo máxima prioridad


## Referencias

- [Tutorial Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite)
- [W3Schools React](https://www.w3schools.com/react/react_render.asp)

## Clerk
Proveedor de auth y social login para React y otros frameworks.

- Crear cuenta en [Clerk](https://dashboard.clerk.com/sign-up)
- [Tutorial - Cleark en React](https://clerk.com/docs/quickstarts/get-started-with-create-react-app)