const nombre = 'Sebastian'; // Declara una constante 'nombre' y la inicializa con el valor 'Sebastian'
const apellido = 'Gañan'; // Declara una constante 'apellido' y la inicializa con el valor 'Gañan'

const nombreCompleto = nombre + ' ' + apellido; // Concatena 'nombre' y 'apellido' con un espacio en medio para crear 'nombreCompleto'
const template = `El nombre de la persona
es: ${nombre}, y su apellido: ${apellido}`; // Usa un template string para crear 'template', que incluye variables interpoladas

console.log(nombreCompleto); // Imprime 'Sebastian Gañan'
console.log(template); // Imprime 'El nombre de la persona es: Sebastian , y su apellido: Gañan'

const html = `
<h1>Hola</h1>
<p>${nombre}</p>
`; // Usa un template string para crear un bloque de código HTML, incluyendo la variable 'nombre'

console.log(html); // Imprime el contenido de 'html', que incluye etiquetas HTML con la variable 'nombre'
