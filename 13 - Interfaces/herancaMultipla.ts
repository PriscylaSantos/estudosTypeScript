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