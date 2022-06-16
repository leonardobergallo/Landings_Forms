# Formulario de Preventa desde Pauta utilizando Gatsby (ReactJS).
Realizado por Acrons para Movistar Argentina.
Developers Team:

- David Mancilla
- Enzo Piccoli
- Adriano Catena
- Leonardo Bergallo

## Pruebas locales
Para realizar pruebas locales solo se debe ejecutar el script `yarn start`, o `npm start` si no utiliza yarn, parado siempre sobre la carpeta raiz de la app. Recordar revisar que los paquetes NPM esten instalados y estar conectado a la VPN via F5. </br>
Este script ejecuta inmediatamente un servidor local de prueba luego de hacer un build provisorio (no confundir, este build no es el correcto para versiones productivas).</br>
Por defecto dispara una nueva app web corriendo en localhost en el puerto 8000 (este puerto es por defecto, para cambiarlo revise la documentacion de Gatsby).

## Pasos para subir a certificacion y/o desarrollo
Antes de realizar el build, corrobar que se tienen instalados todos los paquetes NPM requeridos para la app. Para esto debemos abrir una terminal, ya sea la propia de VSCode o una externa, y "pararnos" siempre sobre la carpeta root:
- (directorio del repositorio)\Landings_Forms\form-preventa

Luego ejecutar el script: `yarn install`, o `npm install` en caso de no utilizar yarn.</br>

Una vez comprobados y/o instalados todos los paquetes requeridos, para cualquiera de los casos debemos abrir una terminal, ya sea la propia de VSCode o una externa (podemos utilizar la misma terminal antes abierta), y ejecutar el script correspondiente parandonos siempre sobre la carpeta root: (directorio del repositorio)\Landings_Forms\form-preventa

### Certificacion

- Para subir a certificacion se debe ejecutar el siguiente comando:
  `yarn certi`, o ` npm certi` si no se utiliza yarn

- Copiar el contenido de la carpeta "/public" dentro de la carpeta "D:/SERVER/SISPRO/Visualizador/fibra/preventa"

### Produccion

- Ejecutar el script:
  `yarn prod`, o `npm prod` si no se utiliza yarn

- Copiar el contenido de la carpeta "/public" dentro de la carpeta que requiere el CRQ correspondiente
