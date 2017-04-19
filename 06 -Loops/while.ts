var num: number = 5;
var factorial: number = 1;

while(num >= 1)
{
    factorial *= num;
    num--;
}

console.log("O fatorial é "+factorial);
