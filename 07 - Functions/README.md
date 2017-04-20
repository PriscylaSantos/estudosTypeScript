### Funções

#### Declarando uma função
[funcao.ts](funcao.ts)  

*Syntax*
```typescript
function name()
{
    /* code */
}
```

#### Chamando uma função
*Syntax*
```typescript
name()
```

#### Funções de retorno
[funcaoRetorno.ts](funcaoRetorno.ts)

*Syntax*
```typescript
function name(): return_type
{
    //code
    return value;
}
```

#### Parâmetros
[parametros.ts](parametros.ts)  

*Syntax*
```typescript
function name(param1: type , param2: type) 
{
    //code
}
```

#### Parâmetro opcional 
[parametroOpcional.ts](parametroOpcional.ts)  
Deve ser definido como o último argumento em uma função.  

*Syntax*
```typescript
function name(param1: type , param2: type, param3?: type) 
{
    //code
}
```

##### Parâmetros Rest  
[parametroRest.ts](parametroRest.ts)  
Não restringir o número de valores que você pode passar para uma função.No entanto, os valores passados devem todos ser do mesmo tipo.  

*Syntax*
```typescript
function name(...param: type[]) 
{
    //code
}
```

##### Parâmetro Default  
[parametroDefaut.ts](parametroDefaut.ts)  
Não restringir o número de valores que você pode passar para uma função.No entanto, os valores passados devem todos ser do mesmo tipo.  

*Syntax*
```typescript
function name(param1: type, param2: type, param1: type = default_value) 
{
    //code
}
```

