import { Libros } from "./models/classBooks";

console.log('MY LIBRARY APP');

while (true) {
    console.log('Opciones');
    console.log('1.Insertar Libro');
    console.log('2.Buscar Libro');
    console.log('3.Eliminar Libro');
    console.log('4.Insertar Autor');
    console.log('5.Buscar Autor');
    console.log('6.Eliminar Autor');
    console.log('7.Realiar Transacción');
    console.log('8.Salir');
    console.log('Opciones');

    const option = prompt('Ingrese una opción') 

    switch(option){
        case '1':

        const titulo = prompt('Ingrese el titulo del libro')
        const autor = prompt('Ingrese el nombre del autor')
        const precio = prompt('Ingrese el precio del libro')
        break
    }
}