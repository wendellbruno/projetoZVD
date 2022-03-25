Resumo : 
O projeto foi criado com base em uma necessidade da empresa, para dá suporte ao responsável pelo T.I (EU), quando se tratava de abrir chamados para
a empresa responsável pelo ERP.
A ideia do projeto consiste em que o usuário que necessita do suporte, possa passar as informações necessárias como :
Rotina, Título e Descrição, de forma escrita, assim felicitando a responsabilidade do T.I em informar à TOTVS corretamente o problema. 
Por se tratar de uma empresa com poucos funcionários e onde o acesso a aplicação só pode ser feito de forma interna, maior parte da segurança foi feita e validada no frontend utilizando o localStorage para armazenar informações como id do usuário, token e cargo, assim protegendo as rotas e botões que cada categoria pode acessar, ao efetuar o logout todos os dados armazenados do localStorage é deletado. Assim evitando problemas. 
Tipos de usuários: 
Usuários comuns tem permissão apenas de criar chamados, visualizar seus próprios, deletar e mudar o status para resolvido.
Usuários administradores além das funcionalidades comuns, conseguem ver todos os chamados de cada usuário, Criar, editar e deletar usuários.

Especificações : 

Foi utilizando como banco de dados o mongodb na sua versão cloud, express para gerenciar a parte API, cors para liberar o acesso externo as funcionalidades da API.
Para o front utilizei o framework Vue e bulma para facilitar com o CSS, e o axios para fazer as requisições ao backend.
Ao iniciar o projeto vue nescessita que seja habilitado o vue-router

dependecias : 
backend : 
npm i --save express mongoose dotenv cors
npm i nodemon -D

frontend :
npm i --save axios bulma

![telas](https://user-images.githubusercontent.com/79750052/160145281-9733a167-71a0-4c6a-afe8-305ed4419c21.PNG)

