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
## Referencias

- [Tutorial Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite)