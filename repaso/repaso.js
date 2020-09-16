/*


const nombres = ['asd', 'asd'];

const amigos = [
    {
        nombre: 'Gonza',
        edad: 13,
        amigos: ['Eduardo', 'Jime', 'Soledad'],
        saludar: function () {
            return 'Hola ' + this.nombre
        }
    }, 
    {
        nombre: 'Samie',
        edad: 18,
        amigos: ['Eduardo', 'Jime', 'Soledad'],
        saludar: function () {
            return 'Hola ' + this.nombre
        }
    }, 
    {
        nombre: 'Juli',
        edad: 15,
        amigos: ['Eduardo', 'Jime', 'Soledad'],
        saludar: function () {
            return 'Hola ' + this.nombre
        }
    }
]

let amigo;

for (let i = 0; i < amigos.length; i++) {
    amigo = amigos[i];
}

console.log(amigo.nombre);
*/

/*
const frutas = ['Ananá', 'Banana', 'Manzana', 'Kiwi', 'Pera'];

frutas.forEach((fruta) => {
    console.log(fruta)
});

const frutasEnPlural = frutas.map((fruta) => {
    return fruta + 's';
});

console.log(frutas);
console.log(frutasEnPlural);

*/
const precios = [10, 5, 18, 22, 15];
console.log(precios);
const preciosBajos = precios.filter((precio, index) => {
    return index > 2;
});
console.log(preciosBajos);

const precioX2 = precios.map((precio) => {
    return precio * 2;
});

console.log(precioX2)