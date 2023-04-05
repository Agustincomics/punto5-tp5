/* Realizar una web con un cronómetro, que tenga las opciones de iniciar, 
reset (volver el cronómetro a 0) y pausar.
Date() : la función Date() se utiliza para crear un objeto de fecha y hora. Esto puede ser útil para trabajar con fechas y horas específicas.

setInterval() : la función setInterval() se utiliza para ejecutar una función en un intervalo de tiempo especificado. Esta función puede ser útil para realizar tareas repetitivas, como actualizar un reloj o una cuenta regresiva.

setTimeout() : la función setTimeout() se utiliza para ejecutar una función después de un intervalo de tiempo especificado. Esta función puede ser útil para programar una tarea para que se ejecute en el futuro.

clearInterval() : la función clearInterval() se utiliza para detener la ejecución de una función programada con setInterval().

clearTimeout() : la función clearTimeout() se utiliza para detener la ejecución de una función programada con setTimeout(). */

let milisegundos = 0;
let segundos = 0;
let minuto = 0;
let hora = 0;

function cronometro(){
  milisegundos ++;
  milisegundosASegundos();
  let cronometro = `     ${hora}:${minuto}:${segundos}`;
  document.getElementById("cronometro").innerHTML = cronometro;
}
function milisegundosASegundos(){
    if (milisegundos == 280) {
      segundos ++;
      milisegundos = 0;
    }

    if (segundos == 60) {
      minuto ++;
      segundos = 0;
    }

    if (minuto == 60) {
      hora ++;
      minuto = 0;
    }
}

let intervalIniciar;

document.getElementById("iniciar").addEventListener("click", function() {
  intervalIniciar = setInterval(cronometro, 1);
});

document.getElementById("detener").addEventListener("click", function() {
  clearInterval(intervalIniciar);
});

document.getElementById("reiniciar").addEventListener("click", function() {
  milisegundos = 0;
  segundos = 0;
  minuto = 0;
  hora = 0;
});

