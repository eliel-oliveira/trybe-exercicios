console.log(document.getElementById('elementoOndeVoceEsta'));
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';
document.getElementById('primeiroFilhoDoFilho').innerText = 'Este é o primeiro filho do filho';
document.getElementById('pai').firstElementChild.innerText = 'primeiro filho';
document.getElementById('primeiroFilho').style.color = 'black';
document.getElementById('elementoOndeVoceEsta').previousElementSibling.innerText = 'Primeiro filho alterado pelo irmão'
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling.innerText ='Terceiro Filho');

document.getElementById('elementoOndeVoceEsta').nextElementSibling.nextElementSibling.innerText ='Quarto Filho';

console.log(document.getElementById('pai').firstChild.nextElementSibling.nextElementSibling.nextElementSibling)

let novoElemento = document.createElement('section');
let novoElemento2 = document.createElement('section');
let novoElemento3 = document.createElement('section');
let novoElemento4 = document.createElement('div');

console.log(document.getElementById('elementoOndeVoceEsta').parentElement.appendChild(novoElemento));

document.getElementById('elementoOndeVoceEsta').appendChild(novoElemento2);

document.getElementById('elementoOndeVoceEsta').lastChild.innerText = 'filho do elemento onde voce esta'
console.log(document.getElementById('elementoOndeVoceEsta').childNodes);

document.getElementById('primeiroFilhoDoFilho').appendChild(novoElemento3)

document.getElementById('primeiroFilhoDoFilho').lastChild.appendChild(novoElemento4);

document.getElementsByTagName('div')[0].innerHTML = 'uhuuuuuuuuuuuu esta e a primeira div filho do filho que aparece nas listas'
