### Interfaces

São usados para verificar se um objeto se encaixa em uma estrutura

[pessoa.ts](pessoa.ts)  

*Syntax*
```typescript
interface Name
{
    variavel: tipo
    .
    .
    .
    variavelN:tipo
}
```

Interface pode definir o tipo de chave e o tipo de entrada de uma matriz. O índice pode ser do tipo string ou número .

[lista.ts](lista.ts)  

*Syntax*
```typescript
interface Name
{
    [index: number]: string
    //ou
    [index: string]: number
}
```
Uma interface pode ser estendida por outras interfaces. Em outras palavras, uma interface pode herdar de uma ou  várias interfaces.
Para implementar a herança entre as interfaces se utiliza `extends`.

[heranca.ts](heranca.ts)  
[herancaMultipla.ts](herancaMultipla.ts)  
 
*Syntax*
```typescript
interface A { ... }
interface B { ... }

interface C extends A { ... }
interface D extends B,C { ... }

```

