# REST API CRUD
## Funcionalidades
- Crear nuevo registro de cliente
- Listar registros de clientes
- Obtener registro de clientes por id
- Editar registro de cliente
- Eliminar registros de cliente
- Manejo de Objeto HTTP
- Manejo de Errores HTTP
## Tecnologías utilizadas
- **Backend:** JavaScript, Node.js, Express
- **Base de datos:** Mongoose, MongoDB
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
### Endpoints `/api/clients`
#### ➤ GET `/users`
Obtiene la lista de todos los registros de los clientes.
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Get all data",
    "data": [
        {
            "_id": "6a1c67a14433083ddafdabf3",
            "name": "Luis",
            "lastName": "Fernández",
            "age": 22,
            "amount": 31000,
            "__v": 0
        },
        ...
    ]
}
```
#### ➤ GET `/users/:id`
Obtiene un solo registro de cliente por ID.
- **Params:** `:id` → ID del cliente a buscar
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Get one data",
    "data": {
        "_id": "6a1c67b14433083ddafdabf4",
        "name": "Sofía",
        "lastName": "López",
        "age": 30,
        "amount": 67000,
        "__v": 0
    }
}
```
#### ➤ POST `/clients/add`
Crea un nuevo registro de cliente.
- **Body:** `application/json`
```json
{
    "name": "Andrés",
    "lastName": "Torres",
    "age": 38,
    "amount": 61000
}
```
- **Response:** `201 OK`
```json
{
    "success": true,
    "msg": "Save data",
    "data": "6a1e0f3820b0f533fcea4376"
}
```
#### ➤ PUT `/clients/:id`
Actualiza un registro de cliente existente por ID.
- **Params:** `:id` → ID del registro a actualizar
- **Body:** `application/json`
```json
{    
    "name": "Juan",    
    "lastName": "Perez",    
    "age": 44,    
    "amount": 60000
}

```
- **Response:** `201 OK`
```json
{
    "success": true,
    "msg": "Updated data",
    "data": "6a1e134d20b0f533fcea4377"
}
```
#### ➤ DELETE `/clients/:id`
Elimina un registro de cliente por ID.
- **Params:** `:id` → ID del registro a eliminar
- **Response:** `200 OK`
```json
{
    "success": true,
    "msg": "Data deleted",
    "data": "6a1e157a3773fd895927b526"
}
```
# **Nota:** Antes de salir, pasate a ver las branches