# REST API CRUD
## Funcionalidades
- Crear nuevo registro de tareas
- Listar registros de tareas
- Editar registro de tareaa
- Eliminar registros de tareas
## Tecnologías utilizadas
- **Backend:** JavaScript, Node.js
- **Base de datos:** JSON
## Arquitecturas
- Monolitica
- Modular
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
### Endpoints `/api/task`
#### ➤ GET `/task`
Obtiene la lista de todos los registros de las tareas.
```json
[
    {
        "id": 1,
        "titulo": "Comprar viveres",
        "descripcion": "Comprar arroz, leche y pan",
        "completado": false
    },
    ...
]
```
#### ➤ POST `/task`
Crea un nuevo registro de tarea.
- **Body**: `application/json`
- **Response:** `200 OK`
```json
{
    "title": "Leer un libro",
    "description": "Avanzar al menos 30 páginas del libro actual",
    "completed": false
}
```
#### ➤ PUT `/task?id=X`
Actualiza un registro de tarea existente por ID.
- **Query:** `?id=X` → ID del registro a actualizar
- **Body:** `application/json`
- **Response:** `200 OK`
```json
{ 
    "title": "Revisar correos (actualizado)",
    "description": "Responder correos del trabajo y eliminar spam",
    "completed": true
}
```
#### ➤ DELETE `/task?id=X`
Elimina un registro de tarea por ID.
- **Params**: `?id=X` → ID del registro a eliminar
- **Response:** `200 OK`
# **Nota:** Antes de salir, pasate a ver las branches
