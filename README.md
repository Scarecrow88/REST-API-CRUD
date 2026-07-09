# REST API CRUD
## Funcionalidades
- Crear nuevo registro de persona
- Listar registros de personas
- Editar registro de persona
- Eliminar registros de persona
- Listar registros desde servicio externo
## Tecnologías utilizadas
- **Backend:** Java, Spring, Spring Boot
- **Base de datos:** JPA, MySQL (mysql-connector-j)
- **Web:** Spring Web
## Arquitecturas
- Modelo vista controlador
- Modelo vista controlador (MVC)
## URL Docs
- **url:** `localhost:8080`
### Endpoints `/`
#### ➤ GET `/`
Obtiene un mensaje de comprobacion de funcionamiento.
- **Response:** `200 OK`
```json
{
  "title": "Hola mundo"
}
```
### Endpoints `/api/people`
#### ➤ GET `/people`
Obtiene la lista de todos los registros de las personas.
- **Response:** `200 OK`
```json
[
    "success": true,
    "msg": "Get all data",
    "data": [
        {
            "id": 1,
            "name": "Juan Pérez",
            "city": "Bogotá",
            "celNumber": "3001234567"
        },
        ...
    ]
]
```
#### ➤ GET `/people/:id`
Obtiene un solo registro de persona por ID.
- **Params:** `:id` → ID de la persona a buscar
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Get one data",
    "data": {
        "id": 44,
        "name": "Abril Niño",
        "city": "Cartago",
        "celNumber": "3548788990"
    }
}
```
#### ➤ POST `/people`
Crea un nuevo registro de persona.
- **Body**: `application/json`
```json
{
    "name": "Mario Torres",
    "city": "Bogota",
    "celNumber": "3023453322"
}
```
- **Response:** `201 OK`
```json
{
    "success": true,
    "msg": "Save data",
    "data": "14"
}
```
#### ➤ PUT `/people/:id`
Actualiza un registro de persona existente por ID.
- **Params:** `:id` → ID del registro a actualizar
- **Body:** `application/json`

```json
{
    "celNumber": "3426566778",
    "city": "Rionegro",
    "id": 32,
    "name": "Julieta Hoyos"
}
```
- **Response:** `201 OK`
```json
{
    "success": true,
    "msg": "Updated data",
    "data": "25"
}
```
#### ➤ DELETE `/people/:id`
Elimina un registro de persona por ID.
- **Params**: `:id` → ID del registro a eliminar
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Data deleted",
    "data": 31
}
```
### Endpoints `/api/user`
#### ➤ GET `/user`
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