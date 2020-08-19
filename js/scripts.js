//Cadenas de texto:

//Varibale:
let nombre;

//Puede ser una comilla simple o doble no importa:
nombre = 'Juan';
nombre = "Juan";

//No hay problema de como usarlas en Español:
let mensaje = 'Hola "niño"';

//En Ingles si existe problema porque se usan comillas simples para algunas palabras, por lo tanto tenemos que poner una diagonal invertida:
let mensaje2 = 'Don\'t do that';

//Concadenamos dos varibles: (Esta forma quedará obsoleta):
let aprendido = 'Aprendiendo',
    tecnologia = 'JavaScript';

console.log(aprendido + ' ' + tecnologia);

//La forma mas usada para concadenar varibles de JavaScript ahora es esta:
//El template String:
console.log(`${aprendido} ${tecnologia}`);