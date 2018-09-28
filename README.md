# Rehaciendo tu red social usando librerías y frameworks

## Introducción

En este proyecto se reescribió la anterior red social. Su alcance y el detalle de sus características es exactamente
[el mismo que el original](https://github.com/Laboratoria/curricula-js/tree/v2.x/projects/03-social-network),
incluyendo la parte de Hacker Edition.

El desafío de este proyecto radica en la utilización de nuevas tecnologías como [React](https://reactjs.org/), 
una libreria de JavaScript más utilizadas en todo el mundo.
Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, ...


## Objetivos

El objetivo principal de aprendizaje es familiarizarse con el desarrollo web
usando el _framework_ o _librería_ elegido, y todo lo que ello conlleva:
**documentación**, **arquitectura**, **principios de diseño**, **paradigma**,
**abstracciones**, **vocabulario**, **herramientas**, **comunidad**, ...

Por otro lado, tener que _re-escribir_ un programa es una experiencia de
aprendizaje muy valiosa en sí misma, llevándonos a re-evaluar e iterar sobre
un producto o prototipo. Dada la velocidad a la que evoluciona la tecnología
web, es muy común tener que enfrentarse a este tipo de escenario donde decidimos
(o alguien decide por nosotros) que lo mejor para seguir evolucionando una
aplicación es re-escribirla usando una nueva tecnología.

##  Instalación

Para instalar este proyecto en tu computador, se puede clonar o descargar este repositorio. Luego debes
tener intalado [nodejs](https://nodejs.org/es/) e instalar las siguientes dependencias con [npm](https://www.npmjs.com/):

* npm i react
* npm i firebase
* npm i react-firestore
* npm install react-router-dom
* npm i redux
* npm install redux react-redux
* npm i moment
* npm i redux-firestore
* npm i redux-thunk

**Puedes acceder a la red social en el siguiente link (https://carocromatica.github.io/scl-2018-1-social-network-frameworks/)**

Deberás crear una cuenta y luego podrás ingresar a la red social cuantas veces quieras.


## Consideraciones generales

Este proyecto se debe "resolver" en duplas:
Antonella Caroca y Carolina Torres.


## Parte obligatoria

Ver [03-social-network](https://github.com/Laboratoria/curricula-js/tree/v2.x/projects/03-social-network#parte-obligatoria).

## Hacker edition

Ver [03-social-network](https://github.com/Laboratoria/curricula-js/tree/v2.x/projects/03-social-network#hacker-edition).

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 3
| Nomenclatura/semántica | 3
| Funciones/modularidad | 2
| Estructuras de datos | 2
| Tests | 2
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 3
| SEO | n/a
| **CSS** | |
| DRY | 3
| Responsive | 3
| **SCM** | |
| Git | 3
| GitHub | 3
| **CS** | |
| Lógica | 2
| Arquitectura | 2
| Patrones/paradigmas | n/a

### Habilidades Blandas

Para este proyecto esperamos que ya hayas consolidado un nivel 4 en todas tus
habilidades blandas. Igualmente para llevar tus habilidades al siguiente nivel,
te invitamos a alcanzar un nivel 5 en ellas. Particularmente entrena tu
habilidad de autoaprendizaje, de planificación y organización, y también de dar
y recibir feedback.

Te aconsejamos revisar la rúbrica:

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 4
| Autoaprendizaje | 4
| Solución de Problemas | 4
| Dar y recibir feedback | 4
| Adaptabilidad | 4
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 4
| Comunicación eficaz | 4
| Presentaciones | 4

***



## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Información sobre instalación y despliegue de tu aplicación.

### Pruebas / tests

* [ ] Tests unitarios cubren un mínimo del 70% de statements, functions, lines,
  y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_.
* [ ] Permite publicar nuevos posts.
* [ ] Permite eliminar posts.
* [ ] Pide confirmación antes de borrar posts.
* [ ] Permite editar posts (in place).
* [ ] Permite filtrar posts por público/amigos.
* [ ] Permite marcar posts como _gustados_ (like).
