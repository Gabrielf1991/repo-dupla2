const fs = require('fs');

const funciones = {
    leerJSON: function () {
        return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));
    },
    escribirJSON: function(tareas) {
        return fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, ' '));
    },
    listar () {
        /**
         * Llamar a la funcion leerJSON.
         * Guardar la informacion de la llamada en una variable.
         * Recorremos y consologueamos la info con un forEach();
         * Darle formato a lo que mostramos.
         * 1) NOMBREA TAREA - ESTADO
         */
        const tareas = this.leerJSON();
        tareas.forEach((tarea, index) => {
            console.log(index + 1 + ') ' + tarea.titulo + ' - ' + tarea.estado)
        });
    }, 
    agregar (tarea) {
        /**
         * 1) leer el archivo, guardarlo en memoria (o sea, una variable).
         * 2) obtener la tarea desde el parámetro. transformar la tarea en un objeto del tipo tarea.
         * 3) sumar al array que teniamos en el punto 1).
         * 4) guardar el nuevo array en el archivo.
         * 5) contarle al usuario que estamos Ok.
         */
        const tareas = this.leerJSON();
        const nuevaTarea = {
            titulo: tarea,
            estado: 'Pendiente'
        };
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
        console.log('Tarea gaurdada con éxito.');
    },
    filtrar (estado) {
        /**
         * Leemos el archivo JSON.
         * Filtramos el array con el .filter();
         * Consologueamos el array ya filtrado en el punto anterior.
         */
        const tareas = this.leerJSON();
        const tareasFiltradas = tareas.filter((tarea) => {
            return estado == tarea.estado;
        })
        tareasFiltradas.forEach((tarea, index) => {
            console.log(index + 1 + ') ' + tarea.titulo + ' - ' + tarea.estado)
        });
    },
    eliminar (tareEliminar){
        /**
         * Leer JSON
         * Guardar en memora
         * Buscar Tarea , si está se elimina, sino se devuelve que no existe.
         * si no existe no se hace nada.
         * si existe se elimina y luego graba
         *
         */

    }
    
};

module.exports = funciones;
