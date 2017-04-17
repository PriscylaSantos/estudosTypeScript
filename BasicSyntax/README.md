###  Configuração
Para iniciar é necessário ter o [Node.js](https://nodejs.org/en/) instalado.  
Site do editor TypeScript [online](http://www.typescriptlang.org/play/index.html)

Instalando TypeScript  

    $ npm install -g typescript

Mais informações sobre a instalação do TypeScript [aqui](https://github.com/Microsoft/TypeScript).

### Compilando e Executando 
Após o comando `tsc` é gerado um arquivo `.js`. Para executar o `arquivo.js` se utiliza o `node`.  

    $ tsc arquivo.ts 
    $ node arquivo.js

Para compilar múltiplos arquivos      

    $ tsc arquivo1.ts, arquivo2.ts, arquivo3.ts

### Identificadores
- Podem conter caracteres e dígitos, mas não podem iniciar om dígito  
    - variavelUm , variavel1  
- Não podem incluir símbolos especiais, exceto  underscore ( _ ) e dollar ($)  
    - variavel_um, $variavel  
- São case-sensitive 

### Cometários
- Para comentário de uma linha :  ` // comentário`
- Para comentário de múltiplas linhas:  `/* comentários */`





    
