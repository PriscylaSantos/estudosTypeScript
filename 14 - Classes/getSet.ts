
class Pessoa {
    private _nome: string
    
    get nome() : string {
        return this._nome
    }

    set nome(pessoa : string) {
        this._nome = pessoa
    }
    
}

var g = new Pessoa()
g.nome = "Priscyla Santos"
console.log(g.nome)