interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function cadastro(pessoa: Pessoa): void {
    console.log("Nome: "+ pessoa.nome);
    console.log("Sobrenome: "+ pessoa.sobrenome);
    console.log("Idade: "+ pessoa.idade);
}

cadastro({ nome: "Priscyla", sobrenome: "Santos", idade: 25});