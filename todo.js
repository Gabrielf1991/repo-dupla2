/*
const fs = require('fs');
const data = fs.readFileSync('tareas.json', 'utf-8');
*/
const accionDelUsuario = process.argv[2];
const tarea = process.argv[3];  // Si accion es agregar  
const estado = process.argv[3];

const funciones = require('./funciones');
/// aca deberiamos agregar mas funcionalidad
switch (accionDelUsuario) {
    case 'listar':
        funciones.listar()
    break;
    case 'agregar':
        funciones.agregar(tarea)
    break;
    case 'filtrar':
        funciones.filtrar(estado)
    break;
    case 'eliminar':
        funciones.eliminar(tarea)
    break;
    case undefined:
        console.log('No elegiste opción. Opciones: listar, agregar o filtrar')
    break;
    default:
        console.log('El usuario eligió una opción incorrecta. Opciones: listar, agregar o filtrar')
    break;
}

/*
for (tarea of tareas) {
    console.log('- ' + tarea.titulo +': ' + tarea.estado);
}
*/