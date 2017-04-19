
### Estruturas de decisão

#### if
[Exemplo](if.ts)
```typescript
if(boolean_expression)
{
    //executa caso a expressão seja verdadeira(true)
}
```

#### if...else
[Exemplo](ifElse.ts)
```typescript
if(boolean_expression)
{
    //executa caso a expressão seja verdadeira(true)
}
else
{
    //executa caso a expressão seja falsa(false)
}
```
#### else...if
[Exemplo](elseIf.ts)
```typescript
if(boolean_expressionA)
{
    //executa caso a expressão A seja verdadeira(true)
}
else if(boolean_expressionB)
{
    //executa caso a expressão B seja verdadeira(true)
}
else
{
    //executa caso a expressão A e B sejam falsas(false)
}
```

#### switch...case
[Exemplo](switchCase.ts)
```typescript
switch(variable_expression)
{
    case constant_expr1:
    {
        //statements;
        break;
    }
    case constant_expr2:
    {
        //statements;
        break;
    }
    default:
    {
        //statements;
        break;
    }
}
```