const redeSociais = ["facebook", "instagram", "twitter"];

for(let i = 0; i < redeSociais.length; i++ ){
console.log(`BLA: ${redeSociais[i]}`);
}

redeSociais.forEach(function(item){
    console.log(item);

    // nao retorna nada
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(item){
    itemAtual = {
        nome : item,
        curso: 'frontend'
    }

    return itemAtual

    // retorna um array modificado
})

console.log(alunos2);

const numeros = [1,2,3,4,5]

const dobroNumeros = numeros.map(function(item){    
 item = item * 2
 return item
})

console.log(dobroNumeros);


const paula = alunos2.find(function(item){
   return item.nome == 'Paula'
// consegue encontrar um item dentro de um array
})

console.log(paula, "find");


const indicePaula = alunos2.findIndex(function(item){
    return item.nome =='Paula'
    // retorna o indice
})

console.log(indicePaula);

alunos2.push({
    nome: 'Lucio',
    curso: 'backend'
    // adiciona um item no final do array
})

const alunosFrontEnd = alunos2.every(function(item){
    return item.curso === 'frontend'
    // retorna se todos os itens satisfazem a um predicado
})

console.log(alunosFrontEnd);

const existente = alunos2.some(function(item){
   return item.curso === 'backend'
   // apenas um item do array satisfaça a condição 
})

console.log(existente);

const alunosBackEnd = alunos2.filter(function(item){
    return item.curso === 'backend'

    //filtar itens
})

console.log(alunosBackEnd);


const nums = [10,20,30,10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador

    // fazer agregação de valores
},0)

console.log(soma);


let somaComFor = 0;

for(let i = 0; i < nums.length; i++){
    somaComFor += nums[i]
}


console.log(somaComFor);


const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `
    return acumulador
},'')

console.log(nomesDosAlunos);