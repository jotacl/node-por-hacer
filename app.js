const color = require('colors');

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];


switch (comando) {

    case 'crear':
        console.log('crear por hacer');

        let descripcion = argv.descripcion

        porHacer.crear(descripcion);
        console.log(descripcion);

        break;
    case 'listar':

        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log('==== Por Hacer =========='.green);
            console.log(tarea.descripcion);
            console.log('estado : ', tarea.completado);
            console.log('========================='.green);
        }


        break;
    case 'actualizar':
        //    console.log('actualiza una tarea por hacer');

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;


    case 'borrar':
        console.log(argv.descripcion);
        let borrado = porHacer.borrar(argv.descripcion);


        console.log(borrado, 'registro borrado');

        break;

    default:
        console.log('comando no reconocido');
}