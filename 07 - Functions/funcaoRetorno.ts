function greet():string
{
    return "Olá"
}

function caller() 
{
    var msg = greet()  
    console.log(msg)  
}

caller()