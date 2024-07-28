/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Array de tipo string con los nombres de las cartas
 * @returns {String} Regresa una carta en forma de string
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error(
      "Es necesario que deck sea un array con por lo menos un elemento tipo string"
    );
  }
  const carta = deck.pop();
  return carta;
};
