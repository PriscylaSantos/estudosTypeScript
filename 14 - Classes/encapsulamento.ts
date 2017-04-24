
class Pessoa {
    protected nome: string

    protected  constructor(nomePessoa: string) {
        this.nome = nomePessoa
    }
}


class Empregado extends Pessoa {
    private departamento: string

    constructor(nome: string, departamento: string) {
        super(nome)
        this.departamento = departamento
    }

    public imprimir():void {
      console.log("Olá, meu nome é "+this.nome +" e eu trabalho no "+ this.departamento)
    }
}

let priscyla = new Empregado("Priscyla Santos", "Departamento de TI")
priscyla.imprimir()

/*
    Não é possível fazer, pois o atributo nome é protegido
let tony = new Pessoa("Priscyla")
*/