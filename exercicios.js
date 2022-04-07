console.log(`1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;`)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index = 0;
for (index = 0; index < numbers.length; index += 1) {
    console.log(' numero ' + numbers[index])
}
console.log();

console.log(`2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;`)
let soma = 0;
for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}
console.log("a soma de todos números é " + soma);
console.log();

console.log(`3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;`)
let media = soma / index;
console.log(`A média aritimética é ${media}`)
console.log();
console.log(`4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";`)
if (media > 20) {
    console.log(`valor maior que 20`)
} else {
    console.log(`valor menor ou igual a 20`)
}
console.log();

console.log('5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;');
let numBig = numbers[0];
for (let index5 = 0; index5 < numbers.length; index5 += 1) {
    if (numBig < numbers[index5]) {
        numBig = numbers[index5]
    }
}
console.log(`o maior numero é ${numBig}`);
console.log();

console.log(`6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
`)
//percorre a lista
let par = 0;
let imp = 0;
for (let index6 = 0; index6 < numbers.length; index6 += 1) {
    if (numbers[index6] % 2 == 0) {
        par += 1;
    } else {
        imp += 1;
    }
}
console.log(`essa lista contém ${par} números par e ${imp} impáres`);
console.log();

console.log(`7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o`);
let numSmall = numbers[0];
for (let index7 = 0; index7 < numbers.length; index7 += 1) {
    if (numSmall > numbers[index7]) {
        numSmall = numbers[index7]
    }
}
console.log(`o menor numero é ${numSmall}`);
console.log();
console.log(`8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;`);
let array = [];
for(let index8 = 0; index8 < 25; index8 += 1 ){
   array.push(index8+1);
}
console.log(array)
console.log();
console.log(`9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .`)
let divisao = [];
for(let index9 = 0; index9 < array.length; index9 += 1){
    let aux = array[index9]/2;
    divisao.push(aux)
} 
console.log(divisao);