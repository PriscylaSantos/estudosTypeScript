###  Configuração
Para iniciar é necessário ter o [Node.js](https://nodejs.org/en/) instalado.  
Site do editor TypeScript [Playground](http://www.typescriptlang.org/play/index.html)

Instalando TypeScript  

    $ npm install -g typescript  

Verifique se o TypeScript foi instalado corretamente

    $ tsc -v 

Mais informações sobre a instalação do TypeScript [aqui](https://github.com/Microsoft/TypeScript).

### Criando, Compilando e Executando arquivo 
Os arquivos do tipo TypeScript tem a extensão `.ts`. Para criar um arquivo

      $ touch arquivo.ts
#### Compilando e Executando com `tsc` e `node`
Para compilar se utiliza o comando `tsc`, que gera um arquivo na extensão `.js`. O comando `node` executar o `arquivo.js`.  

    $ tsc arquivo.ts 
    $ node arquivo.js

Para compilar múltiplos arquivos      

    $ tsc arquivo1.ts, arquivo2.ts, arquivo3.ts  
#### Compilando e Executando com `ts-node`
Para mais informações do `ts-node` [aqui](https://github.com/TypeStrong/ts-node)  

Instalando o `ts-node`

    $ npm install -g ts-node  

Para compilar e executar o arquivo

    $ ts-node arquivo.ts  
      
### Identificadores
- Podem conter caracteres e dígitos, mas não podem iniciar om dígito  
    - variavelUm , variavel1  
- Não podem incluir símbolos especiais, exceto  underscore ( _ ) e dollar ($)  
    - variavel_um, $variavel  
- São case-sensitive 

### Cometários
- Para comentário de uma linha :  ` // comentário`
- Para comentário de múltiplas linhas:  `/* comentários */`





    
