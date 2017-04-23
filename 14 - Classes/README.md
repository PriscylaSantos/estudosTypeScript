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