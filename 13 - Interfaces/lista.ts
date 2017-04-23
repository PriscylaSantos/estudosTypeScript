interface ListaNomes 
{
    [indice: number]: string
}

var nomes: ListaNomes = [
    "Antônio",
    "Pedro",
    "Alga", 
    "Lara"
]
var index: any

for(index in nomes){
    console.log(index +": "+nomes[index]) 
}
console.log(nomes)    


interface ListaTelefones
{
    [nome: string]: number
}

var n: string = "Antônio"

var telefones: ListaTelefones 
telefones[n] = 89

var index2: any

for(index2 in telefones){
    console.log(index2 +": "+telefones[index2]) 
}
console.log(nomes)  

 