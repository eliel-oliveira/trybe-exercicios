const a = 50;
const b = 40;
const c = 90;
console.log('______________1______________1______________1______________1______________')
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log('______________2______________2______________2______________2______________')
if (a > b) {
    console.log(`${a} é maior que ${b}`)
} else {
    console.log(`${b} é maior que ${a}`)
}
console.log('______________3______________3______________3______________3______________')
if (a > b && a > c) {
    console.log(`${a} é o maior número`)
} else if (b > a && b > c) {
    console.log(`${b} é o maior número`)
} else {
    console.log(`${c} é o maior número`)
}

console.log('______________4______________4______________4______________4______________')
if (a > 0) {
    console.log(`A constante ${a} é positiva`)
} else if (a < 0) {
    console.log(`A cosntante ${a} é negativa`)
} else {
    console.log(`A constante é zero`)
}

console.log('______________5______________5______________5______________5______________')
let triangulo = a + b + c;
if (triangulo === 180) {
    console.log(`a soma dos angulos internos é de ${triangulo}, portanto isto forma um triangulo`)
} else {
    console.log(`a soma dos angulos é de ${triangulo}, portanto isto não forma um triangulo`)
}
console.log('______________6______________6______________6______________6______________')

const peca = 'rei'

switch (peca.toLowerCase()) {

    case "piao": console.log(`${peca} se movimenta 1 casa para frente, ataca em diagonal`)
        break;
    case "bispo": console.log(`${peca} se movimenta apenas em diagonal, ataca em diagonal`)
        break;
    case "cavalo": console.log(`${peca} se movimenta em L, sendo 2 casas para frente e 1 para o lado, ataca em L`)
        break;
    case "torre": console.log(`${peca} se movimenta nas horizontais, ataca nas horizontais`)
        break;
    case "dama": console.log(`${peca} se movimenta em qualquer direção, ataca em qualquer direção`)
        break;
    case "rei": console.log(`${peca} se movimenta 1 casa para qualquer direção, se não houver possibilidades de se mover sem ser capturada leva xeque-mate`)
        break;

    default: console.log(`[ERRO], Verifique se o nome da peça esta correto. (Valor inserido pelo usuário: ${peca})`)
        break;
}
console.log('______________7______________7______________7______________7______________')

const nota = 100;
if (nota > 100 || nota < 0) {
    console.log(`[ERRO], a nota deve ser de 0 a 100, valor inseriodo ${nota}`);
} else if (nota >= 90) {
    console.log(`Sua nota: A`)
} else if (nota >= 80 && nota < 90) {
    console.log(`Sua nota: B`)
} else if (nota >= 70 && nota < 80) {
    console.log(`Sua nota: C`)
} else if (nota >= 60 && nota < 70) {
    console.log(`Sua nota: D`)
} else if (nota >= 50 && nota < 60) {
    console.log(`Sua nota: E`)
} else if (nota < 50) {
    console.log(`Sua nota: F`)
}
console.log('______________8______________8______________8______________8______________')

