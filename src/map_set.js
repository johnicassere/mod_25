const meuMap = new Map()

meuMap.set("nome", "johni")
meuMap.set("stack", "html, css, js")

console.log(meuMap);

const nome = meuMap.get("nome")

console.log(nome);
//meuMap.clear();
console.log(meuMap.size);
console.log(meuMap.has("nome"));

//recuperar chave
for(let chave of meuMap.keys()){
    console.log("Chave: ", chave);
}

//recuperar valores
for(let valor of meuMap.values()){
    console.log("Valor: ",valor);
}

//entries
for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack')

console.log(meuMap);

//Set

const cpfs = new Set()

cpfs.add('42660598843')
cpfs.add('93921994810')
cpfs.add('21179577817')

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach(function(valor){
    console.log(valor);
})

const array = ['Personagem1', 'Personagem2', 'Personagem3', 'Personagem4', 'Personagem5', 'Personagem1', 'Personagem3']

const arrayComSet = new Set([...array])
console.log(arrayComSet);

const arraySemItensDuplicados = [...arrayComSet]
console.log(arraySemItensDuplicados);