%% Creación de nota en SPA
sequenceDiagram
participant Usuario
participant Navegador
participant Servidor

    Usuario->>Navegador: 1. Escribe nota y hace click en Guardar
    activate Navegador
        Navegador->>Navegador: 2. Ejecuta form.onsubmit
        Navegador->>Navegador: 3. e.preventDefault()
        Navegador->>Navegador: 4. Crea objeto nota
        Note right of Navegador: {<br/>  content: texto,<br/>  date: new Date()<br/>}
        Navegador->>Navegador: 5. Actualiza lista local
        Navegador->>Navegador: 6. Redibuja notas (redrawNotes())

    Navegador->>Servidor: 7. POST /new_note_spa
    activate Servidor
        Note left of Servidor: Procesamiento:<br/>- Verifica Content-Type: application/json<br/>- Agrega nota al array<br/>- No redirección
        Servidor-->>Navegador: 8. Respuesta 201 Created
    deactivate Servidor

    Navegador->>Usuario: 9. Muestra nota actualizada
    deactivate Navegador

    Note over Usuario,Navegador: La página NO se recarga<br/>y solo hay 1 solicitud HTTP
