"use strict";

// 1. Función para generar un número aleatorio entre 1 y max
function getRandomNumber(max) {
  return 1 + parseInt(Math.random() * max);
}

// 2. Seleccionamos elementos del DOM
const selectJugada = document.querySelector("#jugada");
const btnJugar = document.querySelector("#btnJugar");
const mensaje = document.querySelector("#mensaje");

// 3. Función para generar movimiento aleatorio
function generarMovimientoAleatorio() {
  const numero = getRandomNumber(9); // entre 1 y 9

  if (numero <= 3) {
    return "piedra";
  } else if (numero >= 7) {
    return "papel";
  } else {
    return "tijera";
  }
}

// 4. Función principal para jugar
function jugar() {
  const jugada = selectJugada.value;
  if (!jugada) {
    mensaje.textContent = "Por favor, selecciona una jugada.";
    return;
  }

  const comp = generarMovimientoAleatorio();

  if (jugada === comp) {
    mensaje.textContent = "¡Empate!";
  } else if (
    (jugada === "piedra" && comp === "tijera") ||
    (jugada === "papel" && comp === "piedra") ||
    (jugada === "tijera" && comp === "papel")
  ) {
    mensaje.textContent = "¡Has ganado!";
  } else {
    mensaje.textContent = "Has perdido.";
  }
}

// 5. Escuchar evento de clic
btnJugar.addEventListener("click", jugar);
