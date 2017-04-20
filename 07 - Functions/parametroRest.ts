function addNumbers(...numeros:number[]) 
{
    var soma: number = 0

    for (var index = 0; index < numeros.length; index++) 
    {
        soma = soma + numeros[index]        
    }   

    console.log("Soma dos números:", soma)
}

addNumbers(1,2,3)
addNumbers(10,20,30,40,50,60)