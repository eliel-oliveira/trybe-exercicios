console.log('1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.:')
console.log();
let number = 10;
let fatorial = 0;
for(let index = number; index > 0; index -=1){
    fatorial += number*index;
}
console.log(fatorial);
console.log();
console.log('2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.')