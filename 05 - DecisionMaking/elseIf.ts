var num: number = 2
    
console.log("A = ",num)

if(num > 0)
{
    console.log("A é positivo")
}
else if(num < 0)
{
    console.log(" A é negativo")
}
else
{
    console.log("A  é 0")
}

console.log("************")

var valorUm: number = 5;
var valorDois: number = 9;
var valorTres: number = -5;

console.log("Valor de A: "+valorUm);
console.log("Valor de B: "+valorDois);
console.log("Valor de C: "+valorTres);

var subtracao: number = valorUm - valorDois;
console.log("A -B =  "+subtracao);
if((subtracao > 0) && (valorTres > 0))
{
    console.log("A - B é positivo e C é positivo")
}
else if((subtracao < 0) && (valorTres < 0))
{
    console.log(" A - B é negativo e C é negativo")
}
else
{
    if((subtracao > 0) && (valorTres < 0))
    {
        console.log("A - B é positivo e C é positivo")
    }
    else if((subtracao < 0) && (valorTres > 0))
    {
        console.log(" A - B é negativo e C é positivo")
    }
    else
    {
        console.log("A - B é 0 ou C é 0 ")
    }
}