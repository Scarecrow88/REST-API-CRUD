# REST API CRUD
## Funcionalidades
- Crear nuevo registro de pelicula
- Listar registros de peliculas
- Editar registro de pelucla
- Eliminar registros de pelicula
- Listar registros desde servicio externo
## Tecnologías utilizadas
- **Backend:** JavaScript, Node.js, Express
- **Logs del servidor:** morgan
- **Base de datos:** JSON
- **Control de acceso entre dominios:** cors
- **Conexion con servicio externo:** axios
## Arquitecturas
- Monolitica
- Modular
- Modelo vista controlador (MVC)
## URL Docs 
- **url:** `localhost:3000`
### Endpoints `/`
#### ➤ GET `/`
Obtiene un mensaje de comprobacion de funcionamiento.
- **Response:** `200 OK`
```json
{
    "title": "Hola mundo"
}
```
### Endpoints `/api/movies`
#### ➤ GET `/movies`
Obtiene la lista de todos los registros de las películas.
- **Response:** `200 OK`
```json
[
    {
        "id": 1,
        "name": "Inception",
        "genre": "Sci-Fi",
        "year": 2010
    },
    ...
]
```
#### ➤ POST `/movies`
Crea un nuevo registro de pelicula.
- **Body:** `application/json`
```json
{
    "name": "Interstellar",
    "genre": "Sci-Fi",
    "year": 2014
}
```
- **Response:** `200 OK`
```json
{
    "message": "Movie Added",
    "movie": {
        "id": 6,
        "name": "Interstellar",
        "genre": "Sci-Fi",
        "year": 2014
    }
}
```
#### ➤ PUT `/movies/:id`
Actualiza un registro de película existente por ID.
- **Params:** `:id` → ID del registro a actualizar
- **Body:** `application/json`
```json
{
    "name": "The Matrix",
    "genre": "Action",
    "year": 1999
}
```
- **Response:** `200 OK`
```json
{
    "message": "Movie updated",
    "movie": {
        "id": 2,
        "name": "The Matrix",
        "genre": "Action",
        "year": 1999
    }
}
```
#### ➤ DELETE `/movies/:id`
Elimina un registro de película por ID.
- **Params**: `:id` → ID del registro a eliminar
- **Response:** `200 OK`
```json
{
    "message": "Movie deleted",
    "movie": {
        "id": 5,
        "name": "Won't Anybody Listen?",
        "genre": "Documentary",
        "year": 1987
    }
}
```
### Endpoints `/api/users`
#### ➤ GET `/users`
Obtiene la lista de todos los registros de los usuarios de un servicio externo (JSONPlaceholder).
- **Response:** `200 OK`
```json
[
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
  ...
]
```
# **Nota:** Antes de salir, pasate a ver las branches