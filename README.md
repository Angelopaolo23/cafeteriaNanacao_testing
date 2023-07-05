
# Cafeteria Nanacao - Prueba de modulo Backend con Node y Express en particular sobre Testing

Esta prueba consiste en el desarrollo de una serie de Tests unitarios para probar las funcionalidades respectivas a la base de datos de productos que entrega la cafeteria, los tests tienen los siguientes objetivos:
1.- La ruta GET /cafes debe devolver un status de 200, y el dato que devuelvan debe corresponder a un Array con un minimo de 1 objeto en su interior.
2.-La ruta POST /cafes debe agregar un nuevo cafe y devolver un status 201.
3.-La ruta DELETE /cafes:id debe devolver un codigo 404 si el ID del cafe a eliminar no se encuentra en la base de datos.
4.- La ruta PUT /cafes/:id debe devolver un status de 400 si intentas actualizar un cafe de la base de datos con IDS que no coincidan entre si (ya se debe entregar un id a traves de parametros y otro a traves del payload con el nombre del cafe).






## Installation

Para instalar las dependencias de este proyecto debes realizar un clone o fork de este repositorio de Github, luego dirigirte al directorio raiz del proyecto y utilizar los siguientes comandos, los cuales instalaran dependencias y correran los tests:

```bash
  npm install
  npm run test
```



## Authors

- [@angelopaolo23] - https://github.com/Angelopaolo23


## API Reference



#### Get every element or one by ID.

```http
  GET /cafes/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Optional**. If there is no ID return every element of DB. |

#### Post a new element

```http
  POST /cafes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | **Required**. Needs to be inside an object with "nombre". |
| `nombre` | `string` | **Required**. Needs to be inside an object with "id". |



#### Delete an element by ID

```http
  DELETE /cafes/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the element. |

#### Update an element info

```http
  PUT /cafes/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the element through Params. |
| `id` | `integer` | **Required**. Needs to be inside an object with "nombre", through Payload. |
| `nombre` | `string` | **Required**. Needs to be inside an object with "id", through Payload. |



## Tech Stack



**Server:** Node, Express, Dotenv, Jest, Supertest.

