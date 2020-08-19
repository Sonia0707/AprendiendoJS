// Algunas Funciones incluidas en el lenguaje de JavaScript:

let banda = 'Metallica',
    cancion = 'Enter Sandman';

let nombre;
let nombre10;


nombre = banda + ': ' + cancion;

//length nos dice cuantas letras tiene nuestra varible
console.log(banda.length); // Para saber longitud... Por ejemplo funcion inluida...

//contcat: Para concadenar tambien:
nombre = nombre.concat(' ', 'y es genial');

// Todo en mayusuclas:
nombre = nombre.toUpperCase();

//Toda en minusculas:
nombre = nombre.toLowerCase();

//split => divide una cadena de texto y te convierte cada elemento en una posicion de un array:
let actividad = 'Estoy aprendiendo JavaScript';
nombre2 = actividad.split(' ');

//si tuvieramos comas en la frase tendriamos que ponerlo de la siguiente forma:
let intereses = 'Leer, caminar, escuchar musica, escribir, etc.';
nombre = intereses.split(', ');

//Reemplazar un valor de la variable: actividad
nombre2 = actividad.replace('JavaScript', 'JS');

//Revisar que algo exista:
nombre10 = actividad.includes('JS');
//se usa mucho como para validar si han puesto un @ en un correo por ejemplo:
let email = 'correo@gmail.com';
nombre10 = email.includes('@');

//Repetir variables: (salto de linea \n)
let repit = 'Repite la frase 10 veces. \n';
console.log(repit.repeat(10));