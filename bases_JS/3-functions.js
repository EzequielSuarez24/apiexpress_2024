// ----------------------------------------------------------------------
// Funciones de flecha
// ----------------------------------------------------------------------

const funcionStd = function() {  
    console.log("Esta es una función normal");
}
// Declara una función estándar (anónima) y la asigna a la constante 'funcionStd'
funcionStd(); // Llama a 'funcionStd', que imprime "Esta es una función normal"


const funcionFlecha = () => {  
    console.log("Esta es una función de flecha");
}
// Declara una función de flecha y la asigna a la constante 'funcionFlecha'
funcionFlecha(); // Llama a 'funcionFlecha', que imprime "Esta es una función de flecha"

const funcionFlechaUnaLinea = () => console.log("Esta es una función de flecha en una linea");
// Declara una función de flecha que ejecuta una sola línea de código, sin necesidad de llaves '{}'
funcionFlechaUnaLinea(); // Llama a 'funcionFlechaUnaLinea', que imprime "Esta es una función de flecha en una linea"

// ----------------------------------------------------------------------
// Callbacks
// ----------------------------------------------------------------------

const mensaje = function() {  
    console.log("Este mensaje se muestra después de 3 segundos");
}
// Declara una función llamada 'mensaje' que imprime un mensaje

setTimeout(mensaje, 3000);
// Llama a 'setTimeout', que ejecutará la función 'mensaje' después de 3 segundos (3000 ms)

setTimeout(function() {  
    console.log("CALLBACK - Este mensaje se muestra después de 3 segundos");
}, 3000);
// Usa una función anónima como callback en 'setTimeout', que se ejecutará después de 3 segundos

setTimeout(() => console.log("CALLBACK Funcion de Flecha- Este mensaje se muestra después de 3 segundos"), 3000);
// Usa una función de flecha como callback en 'setTimeout', que se ejecutará después de 3 segundos

// ----------------------------------------------------------------------
