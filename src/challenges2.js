// Desafio 10
function techList(arrayNomes, nome) {
  let listaObjetos = [];
  if (arrayNomes.length === 0) {
    return 'Vazio!';
  }
  for (let key of arrayNomes.sort()) {
    let objeto = {
      tech: key,
      name: nome,
    };
    listaObjetos.push(objeto);
  }
  return listaObjetos;
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
  let numbers = string.match(/\d+/g).map(Number);
  let copos = 0;
  for (let key of numbers) {
    copos += key;
  }
  if (copos === 1) {
    return `${copos} copo de água`;
  }
  return `${copos} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
