### Strings
[string.ts](string.ts) 

*Syntax*
```typescript
var name = new String(string)
```
#### Propriedades  
[constructor.ts](constructor.ts)   
[length.ts](length.ts)  
[prototypes.ts](prototype.ts)  

* `objeto.constructor` = Retorna uma referência
* `objeto.length` = retorna o tamanho da string
* `objeto.prototype.novapropriedade` = atribui novas propriedades e métodos ao objeto String

#### Métodos de String
[charAt.ts](charAt.ts)   
[charCodeAt.ts](charCodeAt.ts)  
[concat.ts](concat.ts)

* `charAt(index)` =  retorna o caractere do índice especificado.  
    * index começa em 0 e termina em `str.lenght - 1`
* `charCodeAt(index)` = retorna o valor UNICODE do caracter no índice especificado. 
* `concat(newString)` =  faz a junção de uma ou mais string e retorna uma nova string
* `indexOf(string)` = retorna o índice da primeira ocorrência do valor especificado

*Syntax*
```typescript
var str = new String("first string")
var newStr: string = "new string"

str.charAt(index)

str.charCodeAt(index)

str.concat(newStr)

str.indexOf("string")


```