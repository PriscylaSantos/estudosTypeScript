class Pessoa{
    private idade: number

    constructor(idade:number){
        this.idade = idade
    }

    imprimir(): void{
        console.log("Idade:"+ this.idade)
        if (this.idade > 18) {
            console.log("Maior de idade!")
        }else{
            console.log("Menor de idade!")
        }
    }
}

var pessoa = new Pessoa(25)
pessoa.imprimir()
