# REST API CRUD
## Funcionalidades
- Crear nuevo registro de usuario
- Listar registros de usuarios
- Obtener registro de usuario por id
- Editar registro de usuario
- Eliminar registros de usuario
- Manejo de Objeto HTTP
## Tecnologías utilizadas
- **Backend:** JavaScript, Node.js, Express
- **Base de datos:** MySQL
- **Logs del servidor:** morgan
- **Control de acceso entre dominios:** cors
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
### Endpoints `/api/users`
#### ➤ GET `/users`
Obtiene la lista de todos los registros de los usuarios.
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Get all data",
    "data": [
        {
            "id": 1,
            "name": "Gloria",
            "age": 25,
            "country": "Argentina"
        },
        ...
    ]
}
```
#### ➤ GET `/users/:id`
Obtiene un solo registro de usuario por ID.
- **Params:** `:id` → ID del usuario a buscar
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Get one data",
    "data": {
        "id": 1,
        "name": "Gloria",
        "age": 25,
        "country": "Argentina"
    }
}
```
#### ➤ POST `/users`
Crea un nuevo registro de usuario.
- **Body:** `application/json`
```json
{
    "name": "Diego",
    "age": 34,
    "country": "Costa Rica"
}
```
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Save data",
    "data": "10"
}

```
#### ➤ PUT `/users/:id`
Actualiza un registro de usuario existente por ID.
- **Params:** `:id` → ID del registro a actualizar
- **Body:** `application/json`
```json
{
    "name": "Jane",
    "age": 37,
    "country": "Peru"
}
```
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Updated data",
    "data": "12"
}
```
#### ➤ DELETE `/users/:id`
Elimina un registro de usuario por ID.
- **Params:** `:id` → ID del registro a eliminar
- **Response:** `200 OK`
```json
{
    "success": true,
    "data": "21"
}
```
# **Nota:** Antes de salir, pasate a ver las branches