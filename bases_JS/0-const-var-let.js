let nombre = 'Sebastian'; // Declara la variable 'nombre' y la inicializa con el valor 'Sebastian'

if (true) { // Inicia un bloque 'if' que siempre se ejecuta porque la condición es true
   let nombre = 'Mariano'; // Declara una nueva variable 'nombre' dentro del bloque con el valor 'Mariano'
   console.log(nombre); // Imprime 'Mariano' (la variable 'nombre' dentro del bloque)
}

console.log(nombre); // Imprime 'Sebastian' (la variable 'nombre' fuera del bloque 'if')