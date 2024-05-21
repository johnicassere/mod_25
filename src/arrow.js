const minhaFuncao = () => "Diz Ola";
console.log(minhaFuncao());

const retornaCarro = () => (
    {
        modelo: 'Ka',
        fabricante: 'Ford'
    }
)

console.log(retornaCarro().modelo);

const carro = {
    velocidadeAtual: 40,
    acelerar: function(){
        this.velocidadeAtual += 10;
    },

    frear: function(){
        this.velocidadeAtual -= 10
    }
}

carro.frear()
console.log(carro.velocidadeAtual);
carro.acelerar()

console.log(carro.velocidadeAtual);

