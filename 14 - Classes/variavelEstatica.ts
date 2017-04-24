
class Grid {
    static origem = {x: 0, y: 0}

    constructor(public escala: number) {

    }

    calcularDistanciaDaOrigem(ponto: {x: number, y: number}){
        let xDist = (ponto.x - Grid.origem.x)
        let yDist = (ponto.y - Grid.origem.y)

        return Math.sqrt(xDist * xDist + yDist * yDist)/ this.escala
    }
}

let gridUm = new Grid(1.0);
console.log(gridUm.calcularDistanciaDaOrigem({x: 10, y: 10}))

let gridDois = new Grid(5.0);
console.log(gridDois.calcularDistanciaDaOrigem({x: 10, y: 10}))