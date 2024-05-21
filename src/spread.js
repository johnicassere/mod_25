//Rest

function somar(){
    let somar = 0;

    for(let i = 0; i < arguments.length; i++){
        somar += arguments[i];
    }
    return somar
    //return a + b
}


console.log(somar(10, 20));


function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    },0) 

    return soma
}

console.log(somarComRest(10,20,30));



//Spread


const numeros =  [1,2,3,4];
const numeros2 =  [...numeros, 5,6,7,8];


console.log(...numeros);
console.log(numeros2);


const timesSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo']
const timesRj = ['vasco', 'botafogo', 'flamengo', 'fluminense']

//const timesDeFutebol = timesSp.concat(timesRj)
const timesDeFutebolArray = [...timesSp, ...timesRj]


const timesDeFutebolObj = {
    sp: timesSp,
    rj: timesRj
}
console.log(timesDeFutebolArray);
console.log(timesDeFutebolObj);

const carrosJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: '1.0',
}

const carrosAna = {
   ...carrosJulia,
    motor: '1.8',
}

console.log(carrosJulia);
console.log(carrosAna);


//Desestruturação

//Obj
const {motor: motorAna} = carrosAna;
const {motor: motorJulia} = carrosJulia;

console.log(motorAna);
console.log(motorJulia);

//Array

const [item1, item2, item3, ...outrosTimes] = timesDeFutebolArray

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);




