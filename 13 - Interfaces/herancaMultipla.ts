interface IParent1{
    v1: number
}

interface IParent2{
    v2:number
}

interface Child extends IParent1,IParent2{

}

var obj: Child = {v1: 23, v2: 34}
console.log("Valor 1: " +obj.v1+ ". Valor 2: "+obj.v2)

/*-*-*-*-*-*-*-*/
 console.log("*-*-*-*-*-*-*-*")

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

var i: any
for(i in square){
    console.log(square[i])
}