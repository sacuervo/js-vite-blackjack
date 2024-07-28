/**
 * Esta funcion regresa un numero con el valor de la carta ingresada
 * @param {String} carta Carta en forma de string
 * @returns {number} Un numero con el valor de la carta
 */
export const valorCarta = (carta) => {
  if (!carta || typeof carta != "string")
    throw new Error("Es necesario pasar una carta en forma de string");
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
