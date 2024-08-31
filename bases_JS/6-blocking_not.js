const getDataAsync = (i) => {
    // Define una función de flecha llamada 'getDataAsync' que toma un parámetro 'i'
    setTimeout(() => {
      // Usa 'setTimeout' para retrasar la ejecución de la función interna en 1000 milisegundos (1 segundo)
      console.log(i);
      // Imprime el valor de 'i' después de 1 segundo
      if (i == 5) {
        // Verifica si el valor de 'i' es 5
        console.timeEnd('label_sync');
        // Si 'i' es 5, termina el temporizador 'label_sync' y muestra el tiempo transcurrido
      }
    }, 1000);
  };
  
  console.log('Comienzo del programa');
  // Imprime 'Comienzo del programa'
  
  console.time('label_sync');
  // Inicia un temporizador con la etiqueta 'label_sync'
  
  getDataAsync(1);
  getDataAsync(2);
  getDataAsync(3);
  getDataAsync(4);
  getDataAsync(5);
  // Llama a 'getDataAsync' cinco veces con valores del 1 al 5
  
  console.log('Fin del programa');
  // Imprime 'Fin del programa'