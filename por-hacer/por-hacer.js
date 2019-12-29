const fs = require('fs');

//arreglo
let listadoPorHacer = [];


const guardarBD = () => {


    let data = JSON.stringify(listadoPorHacer);
    console.log(data);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('registro respaldado');

    });

}

const cargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarBD();
    listadoPorHacer = require('../db/data.json');
    return listadoPorHacer;
}



const crear = (descripcion) => {

    cargarBD();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarBD();

    return porHacer;

}


const actualizar = (descripcion, completado = true) => {

    cargarBD();

    let index = listadoPorHacer.findIndex(tarea =>
        tarea.descripcion === descripcion);



    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {

    cargarBD();
    // let index = listadoPorHacer.findIndex(tarea =>
    //     tarea.descripcion === descripcion);

    // console.log(index, descripcion);
    // if (index >= 0) {

    //     listadoPorHacer.splice(1, index);
    //     guardarBD();

    //     return true;
    // } else {
    //     return false;

    let nuevoListado = listadoPorHacer.filter(tarea => {

        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;
    }

}





module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}