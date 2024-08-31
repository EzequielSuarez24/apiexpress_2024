const persona = {
    nombre: 'Sebastian',
    apellido: 'Gañan',
    email: 'sganan81@gmail.com',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.edad }`; // Método para obtener nombre completo y edad
    }
};

const dni = persona.dni || 'NOT_FOUND'; // Asigna 'NOT_FOUND' a 'dni' si 'persona.dni' es undefined

const { nombre, apellido, email } = persona; // Destructura el objeto 'persona' para obtener 'nombre', 'apellido', y 'email'

console.log(nombre, apellido, email, dni); // Imprime 'Sebastian', 'Gañan', 'sganan81@gmail.com', 'NOT_FOUND'

function imprimePersona({ nombre: nombre2, apellido, email, edad = 0 }) { // Destructura el objeto pasado como argumento y renombra 'nombre' a 'nombre2'
    nombre2 = 'Seba'; // Cambia el valor de 'nombre2' a 'Seba' (solo afecta dentro de la función)
    console.log(nombre2, apellido, email, edad); // Imprime 'Seba', 'Gañan', 'sganan81@gmail.com', 50
}

imprimePersona(persona); // Llama a la función 'imprimePersona' pasando el objeto 'persona'

const frutas = ['Banana', 'Manzana', 'Pera']; // Declara un array de frutas

// const f1 = frutas[0];
// const f2 = frutas[1];
// const f3 = frutas[2];
const [fruta1, fruta2, fruta3] = frutas; // Destructura el array 'frutas' en variables individuales

console.log(fruta3); // Imprime 'Pera'
