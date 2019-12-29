//configuracion de los comandos


let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'MArca como completado o pendiente la tarea'
        }
    })
    .command('listar', 'listar tareas por hacer', {
        listar: {

            alias: 'l',
            desc: 'lista tareas por hacer'
        }
    })
    .command('borrar', 'borrar tarea por hacer', {
        descripcion
    })

.help()
    .argv;


module.exports = {
    argv
}