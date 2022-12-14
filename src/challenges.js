/* eslint-disable complexity */
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(strings) {
  let arrayNum = strings.split(' ');
  return arrayNum;
}

// Desafio 4 // Referencia - https://eslint.org/docs/rules/prefer-template
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6 // Referencia - https://www.ti-enxame.com/pt/javascript/como-o-math.max.apply-funciona/1043928842/
function highestCount(arrayNum) {
  let numeros = 0;
  let numRepetido = 0;
  numeros = Math.max.apply(null, arrayNum);
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (numeros === arrayNum[index]) {
      numRepetido += 1;
    } else if (numeros === 0) {
      numRepetido += 1;
      return numRepetido;
    }
  }
  return numRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let valor1 = mouse - cat1;
  let valor2 = mouse - cat2;
  let resultado = '';
  if (valor1 === valor2 * -1) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (valor1 > valor2) {
    resultado = 'cat1';
  } else if (valor2 > valor1) {
    resultado = 'cat2';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(numeros) {
  let novaArray = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      novaArray.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      novaArray.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9 // referencia - https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
function encode(letrasNum) {
  letrasNum = letrasNum.replace(/a/g, '1');
  letrasNum = letrasNum.replace(/e/g, '2');
  letrasNum = letrasNum.replace(/i/g, '3');
  letrasNum = letrasNum.replace(/o/g, '4');
  letrasNum = letrasNum.replace(/u/g, '5');
  return letrasNum;
}
function decode(numLetras) {
  numLetras = numLetras.replace(/1/g, 'a');
  numLetras = numLetras.replace(/2/g, 'e');
  numLetras = numLetras.replace(/3/g, 'i');
  numLetras = numLetras.replace(/4/g, 'o');
  numLetras = numLetras.replace(/5/g, 'u');
  return numLetras;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
