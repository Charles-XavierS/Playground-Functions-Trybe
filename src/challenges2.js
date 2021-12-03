// Desafio 10
function techList(techList, name) {
  
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let check = 0;
  let result = false;

  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    check += 1;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    check += 1;
  }
  if (check === 2) {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let isInteger = /\d+/g; // cria uma variavel que identifica dígitos  
  let matches = string.match(isInteger); // .match compara a variável de digitos isInteger com a string dada como parametro e armazena as coincidencias na lista matches 
  let glassOfWater = 0;

  for (let i = 0; i < matches.length; i += 1) {
    matches[i] = parseInt(matches[i], 10);
  }

  for (let k = 0; k < matches.length; k += 1) {
    glassOfWater += matches[k];
  }
  if (glassOfWater === 1) {
    return `${glassOfWater} copo de água`;
  }
  return `${glassOfWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
