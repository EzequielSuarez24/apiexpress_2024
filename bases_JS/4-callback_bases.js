// Una función callback es aquella que es pasada como argumento a otra función para que sea 
// "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones 
// como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para 
// determinar cuándo se ejecuta la función callback. 

function crearCita(cita, callback){ 
    let miCita = "Como yo siempre digo, " + cita;
    // Combina la cadena fija "Como yo siempre digo, " con la cita pasada como argumento
    callback(miCita); // Llama a la función 'callback' pasando 'miCita' como argumento
}

function logCita(cita){
    console.log(cita); // Imprime la cita pasada como argumento
}

// -------------------------------------------------------
// Uso de la función con un callback definido previamente
crearCita("come tus vegetales!", logCita); // 1
// Llama a 'crearCita' con la cita "come tus vegetales!" y la función 'logCita' como callback

// -------------------------------------------------------
// Uso de la función con un callback definido directamente en la llamada
crearCita("come tus vegetales!", function(cita){ 
    console.log(cita); 
});
// Llama a 'crearCita' con la cita "come tus vegetales!" y una función anónima como callback

// -------------------------------------------------------
// Uso de la función con un callback como función de flecha
crearCita("come tus vegetales!", (cita) => {
    console.log(cita); 
});
// Llama a 'crearCita' con la cita "come tus vegetales!" y una función de flecha como callback

// -------------------------------------------------------
// Uso de la función con un callback de flecha simplificado
crearCita("come tus vegetales!", (cita) => console.log(cita));
// Llama a 'crearCita' con la cita "come tus vegetales!" y una función de flecha de una sola línea como callback
