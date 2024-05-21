# mod_25

**Comandos**
`npm install --save-dev @babel/core @babel/cli`

`npm install --save-dev @babel/preset-env`


**Tipos de métodos**

As maiores novidades do ES6 estão na manipulação dos arrays, neste contexto tivemos a adição dos métodos:

 1 **foreach:** itera pelo array, mas não tem nenhum retorno. 

 2 **map:** itera pelo array e retorna o array que pode ser modificado, por exemplo, para
 criar um array com o dobro dos valores de um outro array:

 ```
 const nums = [2, 4, 6]; 
 const dobro = nums.map(function(item){      
    return item * 2; 
    }); 
    // dobro -> 4, 8, 12
 
 ```

 3) **find:** faz a busca de um item em um array:

 ```
 const alunos = [“gian”, “paulo”, “ana”, “sofia”]; alunos.find(function(item) {     
    return item == “ana”; 
    }) 
    // retornará “ana”
 
 ```

 4) **every:** verifica se todos os itens do array satisfazem a uma condição, por exemplo:

```
[2, 3, 4, 5, 6].every(function(item) {     
    return item > 4; 
    }) 
    // retornará false, pois nem todos números são maiores que 4

```

 5) **some:** parecido com o every, porém se apenas um item satisfazer a condição o retorno será true.


6) **filter:** filtra os itens do array para atender a um requisito, também chamado de predicado, por exemplo, para filtrar os itens maiores que cinco de um array:

```
[20, 4, 2, 3, 5, 6, 10, 12].filter(function(item) {     
    return item > 5; 
    });

```
7)  **reduce:** itera pelos itens do array e possibilidade retornar a agregação dos itens:

```
const nums = [10, 20, 30]; 
const soma = nums.reduce(function(total, itemAtual) {    
    total += itemAtual;    
    return total; 
    }, 0) 
    // 0 = valor inicial 
    // soma -> 60
```

**Rest**

Operador que possibilita receber um número indefinido de argumentos em uma função. Escrevemos o operador Rest utilizando as reticências (...) antes do argumento: 
function somarNumeros(...numeros) {}

Assim teremos acesso a um array chamado números.

Observação: podemos possuir apenas um argumento com o operador Rest na função, e este argumento sempre deverá ser o argumento último da função.


**Spread**

Com o operador Spread podemos distribuir/espalhar os dados de um array ou objeto. Sua sintaxe é igual ao do operador Rest, utilizando as reticências.

const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5, 6, 7, 8];

Assim podemos unir o conteúdo de dois arrays.

O seu uso com objetos nos permite copiar propriedades e também criar novos objetos.

```
const carroDoJoao = {    
    marca: “vw”,    
    cor: “prata”, 
    }

const carroDaAna = {    
    ...carroDoJoao,    
    cor: “azul” 
    }

```

No exemplo, criamos um objeto literal “carroDoJoao” e outro objeto “carroDaAna”. Ambos são da marca VW e sua única diferença é a cor, assim fizemos a cópia dos entre os objetos. atributos através do operador Spread e alteramos apenas o atributo que é diferente 

**Map**

Trata-se de um conjunto de dados chave-valor:

```
const meuMap = new Map();
meuMap.set(“nome”, “gian”)
meuMap.set(“tecnologias”, “html, css,
Javascript”);
```

**Set**

Trata-se de um conjunto de dados onde temos apenas o valor e este valor não pode se repetir:

```
const meuSet = new Set();
meuSet.add(“gian”);
meuSet.add(“ana”);
MeuSet.add(“gian”); // nada irá acontecer
```

**Programação assíncrona**

**Async**

O JavaScript é uma linguagem de programação singlethread, ou seja, não trabalha em mais de um processador, executando tarefas de forma paralela. Apesar disso, no ES6 tivemos a inclusão das Promises, o que nos permite ter um paralelismo no JavaScript.

Para lidar com código assíncrono em JavaScript, facilitando o desenvolvimento de operações que dependem da conclusão de Promises antes de prosseguir com a execução, usamos o await que é uma ferramenta poderosa utilizada antes de uma expressão Promise, ela pausa a execução da função assíncrona até que a Promise seja resolvida ou rejeitada. Enquanto aguarda a conclusão da Promise, a execução da função é suspensa, permitindo que outras tarefas sejam executadas.

**ECMAScript**

O ECMAScript trouxe algumas novidades na programação orientada a objetos no JavaScript, até então não tínhamos classes no JavaScript, apenas funções construtoras. Para criar uma classe utilizamos a palavra reservada class:

```
class Pessoa {

}
```

Assim não utilizamos mais as funções construtoras, apenas as classes e dentro de uma classe temos acesso ao que chamamos de construtor, uma função que irá construir o objeto. 

Configurando seus atributos:

```
class Funcionario {
    construtor(nome, cargo, salario) {
        this.nome = nome;
         this.cargo = cargo;
            this.salario = salario;

    }

}

```

Junto com a adição das classes tivemos a introdução da palavra reservada extends, utilizada para fazer a herança entre classes:

```
class Pessoa {}

class Funcionario extends Pessoa {}

// classe Funcionario é herdeira herda da classe Pessoa

```

Também tivemos melhorias na esfera de encapsulamento, podendo criar membros privados de uma forma mais fácil, utilizando o símbolo # antes do nome da propriedade.


```
class Funcionario extends Pessoa {
    #salario = 1000; // só é acessível dentro da própria classe

     atribuiSalario(novoSalario) {
        this.#salario = novoSalario;
     }
}
```