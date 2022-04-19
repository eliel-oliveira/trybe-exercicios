console.log(document.getElementById('elementoOndeVoceEsta'));
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';
document.getElementById('primeiroFilhoDoFilho').innerText = 'Este é o primeiro filho do filho';
document.getElementById('pai').firstElementChild.innerText = 'primeiro filho';
document.getElementById('primeiroFilho').style.color = 'black';
document.getElementById('elementoOndeVoceEsta').previousElementSibling.innerText = 'Primeiro filho alterado pelo irmão'
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)
document.getElementById('elementoOndeVoceEsta').nextElementSibling.innerText ='Terceiro Filho';
document.getElementById('elementoOndeVoceEsta').nextElementSibling.nextElementSibling.innerText ='Quarto Filho';