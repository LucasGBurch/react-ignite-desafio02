# Aplicação de Coffee Delivery:
 Repositório para **segundo Desafio do Ignite.** Uma aplicação simples e multipage de delivery para colocar em prática o que estudei durante as aulas do módulo 02 do Ignite, da Rocketseat.

# Sobre a aplicação:

- Essa aplicação possui três páginas/rotas diferentes:

  - Home - Introduzindo o site e, logo abaixo, apresentando Cards com displays de cada produto/café. A ativação/desativação deles ocorre ao clicar no botão de carrinho de cada um. Quando ativo, as quantidades de cafés do Card são acrescentadas ao carrinho geral, localizado no Cabeçalho/Header;

  - Checkout - Página que, além de renderizar numa lista os cafés selecionados, também possui um formulário para preencher dados de endereço para entrega. Essa parte ainda é estática, pois não era objetivo do projeto desenvolver esse tipo de API. O formulário tem suas estruturas de validação feitas com a biblioteca React-Hook-Form em conjunto com objetos de validação Zod. Sem passar na validação, não é possível prosseguir para finalizar a entrega. O botão para isso também fica inativo caso não haja cafés no carrinho. Por fim, foi feito através da biblioteca radix 3 RadioButtons para o usuário marcar a forma de pagamento;

  - Success - Página estática para qual a aplicação navega depois de confirmar dados de café e endereço.

# Instruções para rodar:

- **ATENÇÃO!** Caso queira acessar diretamente a aplicação, sem baixar/olhar o projeto e seus códigos, ela está implementada neste link da Vercel: https://react-ignite-desafio02-git-dev-lucasgburch.vercel.app/ ;

- Caso contrário: ao Baixar/Abrir o projeto, **é recomendável fazê-lo no VSCode**, já que essa IDE foi utilizada para o desenvolvimento do desafio;

- **É preciso ter instalado na sua máquina uma versão LTS do Node** ( https://nodejs.org/pt-br/ ), para poder executar os comandos **npm (node package manager)**. Através dos passos abaixo:

  - Para instalar as dependências necessárias para rodar a aplicação, é preciso:
    
    - Clicar com o botão direito no diretório do projeto "...\react-ignite-desafio02" e clique em "abrir terminal integrado".
    
    - No terminal, execute o comando **"npm install" ou a abreviação "npm i"**. Isso é necessário porque a pasta de node_modules com as dependências necessárias para a aplicação não costumam ir para os repositórios devido ao seu peso no commit;

    - Ao ter a pasta node_modules adicionada ao projeto,  e executar o **comando "npm run dev" no mesmo terminal**. Você poderá agora abrir a aplicação no endereço https://localhost:5173;
