abstract class Departamento {

    constructor(public nome: string) { }

    imprimirNome(): void{
        console.log("Departamento: "+ this.nome)
    }

    abstract imprimirReuniao(): void
}

class Contabilidade extends Departamento {

    constructor() {
        super("Contabilidade e Auditoria")        
    }

    imprimirReuniao(): void{
       console.log("O Departamento de Contabilidade terá reunião as 13:00 hs do dia 20/04") 
    }

    gerarRelatoorios(): void{
        console.log("Gerando relatório da Contabilidade....")
    }    
}

var contabilidade = new Contabilidade()
contabilidade.imprimirNome()
contabilidade.imprimirReuniao()
contabilidade.gerarRelatoorios()


