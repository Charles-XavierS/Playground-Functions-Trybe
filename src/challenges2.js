// Desafio 10
function techList(arrayNomes, name) {
  let listaObjetos = [];
  arrayNomes.sort(); // ordenar a lista

  for (let j = 0; j < arrayNomes.length; j += 1) {
    listaObjetos.push({ tech: arrayNomes[j], name });
  }

  if (listaObjetos.length > 0) {
    return listaObjetos;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  if (arrayNumeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    for (let j = 1; j < arrayNumeros.length; j += 1) {
      if ([i] === [j]) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  for (let numeros of arrayNumeros) {
    if (numeros < 0 || numeros > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${arrayNumeros[0]}${arrayNumeros[1]}) ${arrayNumeros[2]}${arrayNumeros[3]}${arrayNumeros[4]}${arrayNumeros[5]}${arrayNumeros[6]}-${arrayNumeros[7]}${arrayNumeros[8]}${arrayNumeros[9]}${arrayNumeros[10]}`
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
  let numeros = string.match(/\d+/g).map(Number);
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
