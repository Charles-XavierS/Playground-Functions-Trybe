// Desafio 10
function techList(arrayNomes, name) {
  let listaObjetos = [];
  arrayNomes.sort(); // ordenar a lista

  for (let index = 0; index < arrayNomes.length; index += 1) {
    listaObjetos.push({ tech: arrayNomes[index], name }); // objeto criado dentro da posição a cada iteração
  }

  if (listaObjetos.length > 0) {
    return listaObjetos;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  // gerar os numeros

}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lado3) {
  // seu código aqui
  let contador = 0;
  let resultado = false;

  if (lineA < lineB + lado3 && lineA > Math.abs(lineB - lado3)) {
    contador += 1;
  }
  if (lineB < lineA + lado3 && lineB > Math.abs(lineA - lado3)) {
    contador += 1;
  }
  if (contador === 2) {
    resultado = true;
  }
  return resultado;
}

// Desafio 13 Referencia https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
function hydrate(string) {
  let numeros = string.match(/\d+/g).map(Number); // O match procura por números (\d), sem parar no primeiro encontrado (flag g). Map para deixar os números como números ao inves de string.
  let copos = 0;

  for (let contador of numeros) {
    copos += contador;
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
