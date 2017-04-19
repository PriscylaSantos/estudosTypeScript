
### Operadores

#### Operadores aritméticos 
- Adição: [`a + b`](addition.ts) 
- Subtração: [`a - b`](subtraction.ts) 
- Multiplicação: [`a * b`](multiplication.ts) 
- Divisão: [`a / b`](division.ts) 
- Módulo: [`a % b`](modulus.ts) 
- Incremento: [`a++`](increments.ts) 
- Decremento: [`a--`](decrements.ts) 

#### Operadores relacionais   
- Maior que: [` A > B `](greaterthan.ts)
- Menor que: [` A < B`](lesserthan.ts)
- Maior ou igual: [` A >= B `](greaterthanEqual.ts)
- Menor ou igual: [` A <= B `](lesserthanEqual.ts)
- Igual: [` A == B `](equality.ts)
- Diferente: [` A != B `](notequal.ts)

#### Operadores lógicos
- And = `&&` : [(A > C && B > D)](and.ts)  
- OR = `||` :  [(A > B || B > C)](or.ts)  
- NOT = `!` : [!(A > D)](not.ts)

#### Operadores de atribuição 
- [` = ` , ` += ` , ` -= ` , ` *= ` , ` /= `](assignment.ts).  
```typescript
a = b + c
a += b   //é equivalente  a = a + b
a -= b   // é equivalente a = a - b
a *= b   // é equivalente a = a * b
a /= b   // é equivalente a = a / b
```
#### Outros operadores

1. Operador de Negação (-): [Modifica o sinal do valor](negacao.ts).

2. Operador de String (+): [Concatenação](string.ts).

3. Operador condicional(ternário): Representa uma condição condicional de forma simplificada [`Test ? expr1 : expr2 `](conditional.ts).

#### Operadores de tipo 
 - `typeof` : [Retorna o tipo da variável](typeof.ts)