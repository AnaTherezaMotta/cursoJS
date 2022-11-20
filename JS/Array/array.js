// let pessoa = {
//     nome: "Ana",
//     sobrenome: "Motta",
//     empresa: "HP",
//     cargo: "Programador"
// };

// console.log(pessoa.nome);
// console.log(pessoa.cargo);
// let nome = "teste";

// const {nome:nomePessoa, cargo, sobrenome, empresa} = pessoa;

// console.log(nomePessoa);
// console.log(cargo);

// desconstruindo um array

// let nomes = ["Mateus","Ana","Lucas","Maria"];

// let { 0:mateus } = nomes;

// console.log(mateus);

// let [primeiroNome] = nomes;

// console.log(primeiroNome);


// let primeiros = [1,2,3];

// let numeros = [...primeiros,4,5,6];
// console.log(numeros);


let pessoa = {
    nome:"Ana",
    idade: 19,
    cargo: "RH"
};

let novaPessoa = {
    ...pessoa,
    status: "Ativo",
    cidade: "Belo Horizonte / MG"
};

// console.log(novaPessoa);

function novoUsusario(info){
    let data ={
        ...info,
        status:"ativo",
        inicio:"01/12/2022",
        codigo:"12345"
    };

    console.log(data);
}

novoUsusario({nome: "Luisa", sobrenome: "Costa", cargo:"Analista"});
