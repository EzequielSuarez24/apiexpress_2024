const getData = (pasada) => {
    // Función de flecha llamada 'getData' que toma un parámetro 'pasada'
    for(let i = 0; i < 999999999; i++) {
      // Bucle 'for' que itera desde 0 hasta 999999998 (casi mil millones de veces)
      const oper = ((i * 10) / (i + 1)) * (i * pasada);
      // Realiza una operación matemática compleja y asigna el resultado a la constante 'oper'
      // Esta operación se ejecuta pero el resultado no se utiliza en ningún lugar
    }
    console.log(pasada);
    // Imprime el valor de 'pasada' después de completar el bucle
  }
  
  console.log('Comienzo del programa');
  // Imprime 'Comienzo del programa'
  
  console.time('label_sync');
  // Inicia un temporizador con la etiqueta 'label_sync'
  
  getData(1);
  getData(2);
  getData(3);
  getData(4);
  getData(5);
  // Llama a 'getData' cinco veces con valores del 1 al 5
  
  console.timeEnd('label_sync');
  // Finaliza el temporizador con la etiqueta 'label_sync' y muestra el tiempo transcurrido desde su inicio
  
  console.log('Fin del programa');
  // Imprime 'Fin del programa'
  