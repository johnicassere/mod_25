function funcMuitoPesada(){
    let execucoes = 0;
    
        for(let i = 0; i <= 10; i++){
            console.log("2 x ",execucoes++ ," = ", i * 2);
        }
   
    return execucoes -1
}

//const funcMuitoPesadaPromisse = new Promise((resolve, reject) => {
    const funcMuitoPesadaPromisse = new Promise(function(resolve, reject){
    try{
        let execucoes = 0;
    
        for(let i = 0; i < 1000000000; i++){
            execucoes++
        }
   
        resolve(execucoes)
    } catch(e){
        reject("Ocorreu um erro ");
    }

});

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com usuario : ${login}`)
        },3000)
    })
}


console.log("Inicio");
//console.log(funcMuitoPesada());
//funcMuitoPesadaPromisse.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
console.log("Fim");


async function execucaoPrincipal (){
    console.log("Inicio");

    //await funcMuitoPesadaPromisse.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros("johni", 123456).then(resultado => {
        console.log(resultado);
    })

    try{
        const resultado = await funcMuitoPesadaPromisse;
        console.log(resultado);
    } catch(e){
        console.log(e);
    }
    console.log("Fim");
}




execucaoPrincipal();