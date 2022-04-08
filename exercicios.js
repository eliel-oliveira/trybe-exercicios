console.log('1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.:')
console.log();
let number = 10;
let fatorial = 0;
for (let index = number; index > 0; index -= 1) {
    fatorial += number * index;
}
console.log(fatorial);
console.log();




console.log('2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.')
console.log();
let word = 'tryber';
let invWord = [];
auxWord = word;
let wordReverse = [];
for (let index = auxWord.length - 1; index >= 0; index -= 1) {
    wordReverse.push(auxWord[index]);
}
console.log(`${word}`);
console.log(`${wordReverse.join('')}`);
console.log();



console.log('3- Considere o array de strings abaixo:')
let array = ['java', 'javascript', 'python', 'html', 'css'];
console.log(array)
console.log(' Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra')
console.log();
let bigWord = array[0];
let smallWord = array[0];
let palavra = [];
for (let index = 0; index < array.length; index += 1) {
    palavra = array[index];    
    if (palavra.length > bigWord.length) {
        bigWord = palavra;
    } else if (palavra.length < smallWord.length){
        smallWord = palavra;
    }
}
console.log(bigWord);
console.log(smallWord);
console.log();
console.log('4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.');