
class Animal {
    nome: String

    constructor(nome: string) {
        this.nome = nome
    }

    andar(distanciaEmMetros: number = 0) {
        console.log(this.nome + " andou " + distanciaEmMetros + " metros")
    }


}

class Gato extends Animal {
    constructor(nome: string) {
        super(nome)
    }

    miar(): void{
        console.log(this.nome + " é um gato que mia muito")
    }
}

class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome)
    }

    latir(): void{
        console.log(this.nome + " é um cachorro que late muito")
    }
}


var gamba = new Animal("Lat")
gamba.andar(5)

var gato = new Gato("Bib")
gato.miar()
gato.andar(25)

var cachorro = new Cachorro("Lof")
cachorro.latir()
cachorro.andar(60)