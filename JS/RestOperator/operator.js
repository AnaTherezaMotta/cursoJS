
// function convidados(...nomes){
//     console.log("Seja Bem vindo todos convidados");
//     console.log(nomes);
// }

// convidados("Mateus","Lucas","Ana");

// function gerador(...numeros){
//     console.log(numeros);

//     const numeroGerado = Math.floor(Math.random() * numeros.length);
//     console.log("Número gerado foi " + numeros[numeroGerado]);
// }

// gerador(1,2,4,25,22,9,10,44);


// MAP:

// let lista = ["Mateus","Ana","Maria"];
// lista.map((item,index) =>{
//     console.log(`Passando ${item} - está na posição ${index}`);
// });

//Reduce - busca reduzir um array

// let numeros = [5,3,2];

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//     console.log(`${acumulador} -total até o momento`)
//     console.log(`${numero} -valor atual`)
//     console.log(`${indice} -indice atual`)
//     console.log(`${original} -array original`)
//     console.log("=============================")

//     return acumulador += numero;
// });

// console.log(total);

//Find
let listagem = [5,3,"Jose",2,"Mateus"];

let busca = listagem.find((item) =>{
    if( item === "Jose"){
        return  console.log("Item encontrado")
    }
});

// console.log(busca);

//Filter

let palavras = ["Mateus", "Ana", "Jose", "Jose","Programador"];

let resultado = palavras.filter((item) =>{
    // return item.length <=4;
    return item === "Jose";
})

console.log(resultado);