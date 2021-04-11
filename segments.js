
function horizontal(t) { //espacio+ '-' t veces + espacio +\n
  let line = " ";
  for (let i = 0; i<t ; i++) {
    line += "-";
  }
  line += " \n"
  return line;
}

function horizontalSpace(t) { //espacio + espacio t veces + espacio + \n
  let line = " ";
  for (let i = 0; i<t ; i++) {
    line += " ";
  }
  line += " \n";
  return line;
}
/*
function verticalSpace(t) {
  let line = "\n";
  for (let i = 0; i<t ; i++) {
    line += "\n";
  }
  line += "\n";
  return line;
}
*/
function left(t) { //(linea vertical pegada a la izquierda) ('|' + espacio t veces + espacio + \n)* t veces
  let line = "";
  for (let i = 0; i<t ; i++) {
    line += "|";
    for (let j = 0; j<t; j++) {
      line += " ";
    }
    line += " \n";
  }

  return line;
}

function right(t) {// (linea vertical pegada a la derecha) (espacio t*2 veces + '|' + \n )* t veces  
  let line = "";
  for (let i = 0; i<t ; i++) {
    line += " "
    for (let j = 0; j<t; j++) {
      line += " ";
    }
    line += "|\n";
  }

  return line;
}

function parallel(t) { // '|' + espacio t veces + '|' + \n
  let line = "";
  for (let i = 0; i<t ; i++) {
    line += "|";
    for (let j = 0; j<t; j++) {
      line += " ";
    }
    line += "|\n";
  }
 
  return line;
}

module.exports = {
  horizontal,
  parallel,
  left,
  right,
  horizontalSpace
}