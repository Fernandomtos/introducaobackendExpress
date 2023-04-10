# Aula s1-06 - Backend: Introdução ao Backend com Express

1. npm init --y (para iniciar um novo projeto);
2. npm install express (para instalar a framework Express);

# criar o folder src e o arquivo app.js, importar a função express do módulo express (por enquanto) com a sintaxe Common.js;

# declarar a variável app contendo como valor a execução da função express;

# com o app instânciado é possível chamar a função listen;

3. node src/app.js (comando para executar o servidor);

# até aqui foi criado o servidor mais sem nenhuma manipulação de recursos;

# agora vamos criar uma rota /users e com o servidor rodando é possível abrir o Insomnia e fazer as simulações necessárias;

# enviando por exemplo uma requisição com o local que o servidor está sendo executado e a rota que queria acessar;

obs. como estamos trabalhando com json, antes de definir a rota devemos informar que o app vai utilizar a configuração do express para fazer a leitura dos dados em json; (linha 4 do app.js)

.gitignore para não subir a pasta node*modules e arquivo \_lock*;
