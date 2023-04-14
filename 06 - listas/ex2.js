// 2) Crie uma lista de números e imprima cada número par encontrado.

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.filter((num) => num % 2 === 0).forEach((par) => console.log(par));