import { pedirCarta, valorCarta, crearCartaHTML } from "./index.js";

/**
 * @param {Array<String>} deck Array de strings que contiene las cartas
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas de la computadora
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {Number} puntosMinimos Puntos mínimos que necesita la computadora para ganar
 * @returns {void}
 * Ejecuta el turno de la computadora
 */
export const turnoComputadora = (
  deck,
  divCartasComputadora,
  puntosHTML,
  puntosMinimos
) => {
  if (!deck || deck.length <= 0) {
    throw new Error("Es necesario que deck sea un array de strings");
  }
  if (!puntosMinimos || puntosMinimos <= 0) {
    throw new Error("Es necesario que puntosMinimos sea mayor o igual a 0");
  }
  if (!puntosHTML) throw new Error("Argumento puntosHTML es necesario");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 20) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 20);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 20) {
      alert("Computadora gana");
    } else if (puntosComputadora > 20) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 99);
};
