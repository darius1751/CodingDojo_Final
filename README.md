# Documencion API

En este archivo se indican los pasos a seguir para la correcta ejecucion de la aplicacion con varios **plus**

* [docker](#docker)
* [swagger](#swagger)

## Instalacion

Realizar la instalacion de los paquetes de node necesarios para la ejecucion de la aplicacion

```bash
    yarn 
    or
    npm i
```

## Run app

1. Antes de realizar la ejecucion de la aplicacion debemos crear el **build** de la misma, la cual se realiza con el siguiente comando:

    ```bash
        yarn build
        or
        npm run build    
    ```

    > **_Nota:_** Este comando se encarga "transpilar" la version de typescript en javascript, para poder ejecutar la aplicacion.
    >Se configuro una pagina Swagger en la ruta /api-docs para mayor facilidad de pruebas y documentacion de la api
    > Importante, la aplicacion al estar construida en typescript necesita el tsc para poder transpilar la version de typescript a javascript, aceptar al momento de correr el build.

2. Luego de la generacion del **build** podemos realizar la ejecucion del programa con el siguiente comando:

    ```bash
        #Version de desarrollo
        yarn dev 
        or 
        npm run build
        #Version de produccion
        yarn start
        or
        npm start
    ```

## Plus

### Swagger

Se configuro una pagina Swagger en la ruta ``/api-docs`` para mayor facilidad de pruebas y documentacion de la api

### Docker

Se tiene la posibilidad de realizar el montado de la DB usando docker y docker-compose, para ello en el backend, se tiene el archivo _docker-compose.yml_ con las configuraciones para realizar el montado de la DB, usando los comandos:

```bash
    # Para realizar el montado de la DB
    sudo docker compose up -d
    or 
    docker compose up -d
    
    # Para bajar la ejecucion de la DB
    sudo docker compose down
    or 
    docker compose down
```

> **_Nota:_** las variables de entorno del contenedor mongoDB se encuentran en el .env

En caso de que docker compose no realice la instalacion de la imagen de mongo, se debe instalar de forma previa usando el comando:

```bash
    sudo docker pull mongo
    or
    docker pull mongo
```
