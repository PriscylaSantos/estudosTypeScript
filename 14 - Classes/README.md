### Classes
 São usadas para encapsular os dados em forma de objeto.

[classe.ts](classe.ts)

*Syntax*
```typescript
class Name
{
    //campos
    variavel: tipo
    
    //construtor
    contructor(parametro: tipo){
        //code
    }

   // funções/métodos
    nameFuncao(): return_type
    {
    //code
    return value;
    }
}

var objeto = new Name() //criando o objeto
obj.variavel = atributo //acessando o atributo
obj.nameFuncao() //acessando o método
```

A herança é a capacidade de criar novas classes a partir de uma classe existente.   
A classe que é estendida para criar novas classes é chamada de classe pai/super. As classes recém-criadas são chamadas as filhas/subordinadas.  
Uma classe herda de outra classe usando a palavra-chave `extends`. 

*Syntax*
```typescript
class A { ... }

class B extends A { ... }
```
As classes filhas herdam todas as propriedades e métodos, exceto os construtores da classe pai. As classes filhas que contêm funções de construtor devem chamar `super()` que executará a função de construtor na classe pai.

[heranca.ts](heranca.ts)  

*Syntax*
```typescript
class A { 
    ...
    contructor(parametro: tipo){ this.parametro = parametro }
    ...
 }

class B extends A {
    contructor(parametroB: tipo) { super(parametroB) }
    ...
 }

class C extends A { 
     contructor(parametroC: tipo){ super(parametroC) }
     ...
}

```
Uma classe pode controlar a *visibilidade* de seus atributos, chamado de **encapsulamento**. Os atributos de uma classe podem ser `public`(público), `private`(privado) ou `protected`(protegido). No TypeScript cada atributo é `public` por padrão.  

[encapsulamento.ts](encapsulamento.ts)

*Syntax*
```typescript
class Name
{
   variavel: tipo // public por padrão 
   public a: tipo
   private b: tipo
   protected x: tipo
    ...
}

```

Uma **variável estática** mantém seus valores até que o programa termine a execução, pois são visíveis na classe e não nas instâncias.  

[variavelEstatica.ts](variavelEstatica.ts) 

*Syntax*
```typescript
class Name
{
   static variavel: tipo
    ...
}

```