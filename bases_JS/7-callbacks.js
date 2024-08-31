// Función estándar de orden superior que llama al callback
const getUsuario = (id, callback) => {
    // Imprime el ID proporcionado
    console.log(`Ingreso del parametro ${id}`);    
    // Simula una búsqueda de usuario
    console.log(`Simulación de búsqueda del usuario....`);    

    // Objeto que representa un usuario encontrado
    const user = {
        username: 'sganan81',
        nombre: 'Sebastian Gañan',
        email: 'sganan81@gmail.com'
    };
    // Llama al callback con el objeto 'user' como argumento
    callback(user);
}

const id = 10;
// Define un ID de usuario para buscar

// Utilizando la palabra clave 'function' para el callback
getUsuario(id, function(param) {
    // Esta función se ejecuta cuando 'getUsuario' llama al callback
    console.log(param); // Imprime el objeto 'user' recibido como argumento
});

// Función de flecha como callback
getUsuario(id, (parametro) => {
    // Esta función de flecha se ejecuta cuando 'getUsuario' llama al callback
    console.log(parametro); // Imprime el objeto 'user' recibido como argumento
});

// Cuando existe un único parámetro y este se utiliza directamente en la función
getUsuario(id, console.log);
// 'console.log' es una función que toma un solo argumento, por lo que se puede pasar directamente como callback
