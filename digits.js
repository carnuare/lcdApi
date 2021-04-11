const segment = require("./segments.js");

function digits(t) { //se accede al indice del mapa (numero) con un tamaño dado
  return {
  "0": segment.horizontal(t) + segment.parallel(t) + segment.horizontalSpace(t) + segment.parallel(t) + segment.horizontal(t),
  "1": segment.horizontalSpace(t) + segment.right(t) + segment.horizontalSpace(t) + segment.right(t) + segment.horizontalSpace(t),
  "2": segment.horizontal(t) + segment.right(t) + segment.horizontal(t) + segment.left(t) + segment.horizontal(t),
  "3": segment.horizontal(t) + segment.right(t) + segment.horizontal(t) + segment.right(t) + segment.horizontal(t),
  "4": segment.horizontalSpace(t) + segment.parallel(t) + segment.horizontal(t) + segment.right(t) + segment.horizontalSpace(t),
  "5": segment.horizontal(t) + segment.left(t) + segment.horizontal(t) + segment.right(t) + segment.horizontal(t),
  "6": segment.horizontal(t) + segment.left(t) + segment.horizontal(t) + segment.parallel(t) + segment.horizontal(t),
  "7": segment.horizontal(t) + segment.right(t) + segment.horizontalSpace(t) + segment.right(t) + segment.horizontalSpace(t),
  "8": segment.horizontal(t) + segment.parallel(t) + segment.horizontal(t) + segment.parallel(t) + segment.horizontal(t),
  "9": segment.horizontal(t) + segment.parallel(t) + segment.horizontal(t) + segment.right(t) + segment.horizontal(t)
  }
}
module.exports = digits;