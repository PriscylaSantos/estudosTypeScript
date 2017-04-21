function pessoa(id: number, nome: string) 
{
    this.id = id
    this.nome = nome    
}

var cadastro = new pessoa(123, "Priscyla")

pessoa.prototype.email = "priscyla@email.com"
console.log("ID: "+ cadastro.id)
console.log("Nome: "+ cadastro.nome)
console.log("Email: "+ cadastro.email)