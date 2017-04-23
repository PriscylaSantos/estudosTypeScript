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
   function nameFuncao(): return_type
    {
    //code
    return value;
    }
}

var objeto = new Name() //criando o objeto
obj.variavel = atributo //acessando o atributo
obj.nameFuncao() //acessando o método
```

A herança é a capacidade de criar novas classes a partir de uma classe existente. A classe que é estendida para criar novas classes é chamada de classe pai/classe super. As classes recém-criadas são chamadas as sub-classes filhas/subordinadas.
Uma classe herda de outra classe usando a palavra-chave `extends`.   As classes filhas herdam todas as propriedades e métodos,exceto os construtores da classe pai.

*Syntax*
```typescript
class A { ... }

class B extends A { ... }

class C extends A { ... }

class D extends C { ... }
```
