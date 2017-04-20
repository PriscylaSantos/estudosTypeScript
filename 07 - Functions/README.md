### Funções

#### Declarando uma função
```typescript
function function_name()
{
    //código
}
```
#### Chamando uma função
```typescript
function_name()
```
#### Funções de retorno
```typescript
function function_name(): return_type
{
    //código
    return value;
}
```
#### Parâmetros
```typescript
function function_name(param1: type , param2: type) 
{
    //código
}
```
***O parâmetro opcional deve ser definido como o último argumento em uma função.***

##### Parâmetros Rest  
Não restringir o número de valores que você pode passar para uma função.No entanto, os valores passados devem todos ser do mesmo tipo.
```typescript
function function_name(...param: type[]) 
{
    //código
}
```

##### Parâmetro Default  
Não restringir o número de valores que você pode passar para uma função.No entanto, os valores passados devem todos ser do mesmo tipo.
```typescript
function function_name(param1: type, param2: type, param1: type = default_value) 
{
    //código
}
```

