//Variables de JavaScript 3 formas: 

//1º:
var nombre;

//2º:
let nombre2;

//3º:
const nombre3;

//Igualdad:
/**Todas las varibles declaradas tienen que seguir el protocolo de ES6... 
 * No pueden empezar por numero, asterisco * , ni +
 * Es mejor seguir la programación de ES6 =>
 * 
 * var nombreCliente = 'Pedro' => camelCase.
 * var nombre_cliente = 'Pedro' => underscore.
 * var NombreCliente = 'Pedro' => pascal case.
 * 
 * var y let => se puede iniciarliar la varible vacia y despues dar el valor.
 * 
 */

//Diferencias:
/**Entre var , let y const:
 * var: Se puede declarar una varible con el mismo nombre mas de una vez:
 * var nombreCliente = 'Pedro';
 * var nombreCliente = 'Juan';
 * 
 * let: No se puede declarar de nuevo la misma variable solo sustituir:
 * let nombreCliente = 'Pedro';
 * nombreCliente = 'Juan';
 * 
 * const: tiene que tener valor inicial simpre, no como let y var que no importa
 * que de primeras no lo tenga y luego se le de.
 * 
 * Y lo mas IMPORTANTE const, no puede rescribirse tiene el mismo valor siempre.
 * 
 * Ejemplo del con muy util es cuando utilizas elementos del html, porque estos nunca cambian:
 * 
 * => const divMensaje = document.getElementById('mensaje')
 * 
 */