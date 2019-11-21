# Instalación y ejecución del proyecto

## Instalación

1. Ejecutar los comandos:

    ```$xslt
    npm install
    cd client
    npm install
    ```

1. Crea archivos `.env` en root del proyecto y en `client/`, tomando como ejemplo el archivo `.env.local.dist` (análogo a la sección, es decir, en el directorio `client` colocar en el .env la misma estructura del fichero `client/.env.local.dist`, en el directorio raíz de la app, colocar como `.env`, un fichero con la misma estructura del archivo `.env.local.dist`).


## Ejecución

Si estás aún en el directorio `client`, ejecutar desde el paso 1, de lo contrario, ejecutar el paso 2.

1. `cd ..`
1. `npm start`

## Sobre las secciones de la aplicacion

- El puerto por defecto del servidor es el `5000`. Url: http://localhost:5000/.
- El puerto por defecto del cliente es el `3000`. Url: http://localhost:3000/.
