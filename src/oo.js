//funções construtoras
// function Pokemon(nomePokemon, tipoPokemon){
//     this.nome = nomePokemon;
//     this.tipo = tipoPokemon;
// }

//Instacia
//const pikachu = new Pokemon('Pikachu', 'Eletrico')

//ES6 Classe

class Pokemon {
//campo privado acessivel apenas dentro da classe
    #hp = 100;
 
    constructor(nomePokemon, tipoPokemon){
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }

    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com ${nomeAtaque}`);
        
    }

    recebeAtaque(){
        this.#hp -= 10;
    }

    exibeHp(){
        console.log(this.#hp);
    }
  
}

const pikachu = new Pokemon('Pikachu', 'Eletrico');
//pikachu.nome = 'Pikachu'
//pikachu.tipo = 'Eletrico'
//pikachu.atacar('Choque do Trovao')
console.log(pikachu);


//Classe Herdeira
//Herança
//permite criar uma hierarquia de classes, onde as classes filhas herdam 
//as propriedades e métodos da classe pai.
class Pikachu extends Pokemon {
    constructor(){
        super('Pikachu', 'Eletrico')
    }
//Polimorfismo:
//é a capacidade de um objeto responder de forma diferente a um mesmo método, 
//dependendo do contexto em que é chamado.
    atacar(){
       console.log(`${this.nome} atacou com choque do trovão`); 
    }
}

const pikachuDoAsh = new Pikachu()
console.log(pikachuDoAsh);
pikachuDoAsh.atacar();
pikachuDoAsh.recebeAtaque()
pikachuDoAsh.exibeHp();

//console.log(pikachuDoAsh instanceof Pikachu);
//console.log(pikachuDoAsh instanceof Pokemon);


//encapsulamento
//Ao encapsular propriedades e métodos, podemos garantir a 
//integridade dos nossos objetos e reduzir o acoplamento entre 
//diferentes partes do código.


console.log(pikachuDoAsh);