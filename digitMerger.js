const digits = require("./digits.js")

function merge(a, b) { //de dos en dos
  const linesA = a.split('\n') //array que contiene cada línea (horizontal)
  const linesB = b.split('\n')
  
  if (linesA.length == linesB.length) { //deben tener el mismo numero de líneas
  
  let newString = ""; //resultado
  for (let i = 0; i < linesA.length - 1; i++) {  //-1 porque la ultima linea es vacia (los strings siempre acaban en \n)
    let newLine = ""
    newLine += linesA[i] + "   " + linesB[i] + '\n'  //se juntan las lineas y se añade un salto al final
    newString += newLine
  }
    
  return newString;
    
  } else {
    return "ERROR: HAS TO BE THE SAME HEIGHT"
  }
}

function transformToSegments(size, number) {
  var reg = /^\d+$/; //expresion regular para que solo admita numeros
  if (reg.test(number)) {
    if (number.length >= 2) {
      return merge(transformToSegments(size, number.slice(0,-1)), digits(size)[parseInt(number.slice(-1))]) //va quitando el ultimo número y los va mergeando de dos en dos
    }                                     //quita ultimo elemento        //coge ultimo elemento
    else {
      return digits(size)[parseInt(number)]; //un solo digito, indice = numero
    }
  }
}

module.exports = transformToSegments;


			