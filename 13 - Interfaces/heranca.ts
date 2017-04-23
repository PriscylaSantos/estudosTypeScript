interface Pessoa{
    nome: string
    idade: number
}

interface Musico extends Pessoa{
    instrumento: string
}

interface Banda extends Musico {
    cantor: Musico 
    baixista: Musico  
    baterista: Musico  
    pianista: Musico    
}

var pianista = <Musico>{};
pianista.nome  = "Tony"
pianista.idade = 27
pianista.instrumento = "Piano"

var baterista = <Musico>{};
baterista.nome  = "Kioony"
baterista.idade = 22
baterista.instrumento = "Bateria"

var cantor = <Musico>{};
cantor.nome  = "Furny"
cantor.idade = 23
cantor.instrumento = "Gitarra"

var baixista = <Musico>{};
baixista.nome  = "Jonny"
baixista.idade = 25
baixista.instrumento = "Baixo"

var minhaBanda = <Banda>{};
minhaBanda.pianista = pianista
minhaBanda.baixista  = baixista
minhaBanda.baterista = baterista
minhaBanda.cantor = cantor

var nomes: any
for(nomes in minhaBanda)
{
    console.log(minhaBanda[nomes])
}