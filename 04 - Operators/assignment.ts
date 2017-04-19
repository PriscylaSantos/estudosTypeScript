var valorUm: number = 12;
var valorDois:number = 10;
var auxDois: number;
var auxUm: number;

auxUm = valorUm
auxDois = valorDois
console.log("a = ", auxUm);
console.log("b = ", auxDois);

valorUm += valorDois
auxUm = auxUm + auxDois
console.log("a += b: "+valorUm+ " é o mesmo que  a = a + b:"+auxUm)

valorUm -= valorDois
auxUm = auxUm - auxDois
console.log("a -= b: "+valorUm+ " é o mesmo que  a = a - b:"+auxUm)

valorUm *= valorDois
auxUm = auxUm * auxDois
console.log("a *= b: "+valorUm+ " é o mesmo que  a = a * b:"+auxUm)

valorUm /= valorDois
auxUm = auxUm / auxDois
console.log("a /= b: "+valorUm+ " é o mesmo que  a = a / b:"+auxUm)
