# Visão geral do projeto

Neste projeto, você receberá uma aplicação baseada na web que lê feeds RSS. Seu desenvolvedor original viu claramente o valor dos testes, já incluiu o Jasmine e até já começou a elaborar a primeira suíte de testes! Infelizmente, ele decidiu abrir sua própria empresa e agora ficamos com uma aplicação sem uma suíte de testes concluída. É aí que você entra.


## Por que este projeto?
O teste é uma parte importante do processo de desenvolvimento, e muitas organizações praticam um padrão de desenvolvimento conhecido como \"desenvolvimento direcionado para teste\". É quando os desenvolvedores elaboram testes primeiro, antes de começarem a desenvolver a aplicação. Todos os testes, inicialmente, falham e começam a escrever o código da aplicação para que esses testes sejam aprovados.

Esteja você em uma organização que usa desenvolvimento orientado a testes ou em uma organização que usa testes para garantir que o desenvolvimento futuro de recursos não danifique os recursos existentes, é importante ter essa habilidade!


## O que vou aprender?

Você aprenderá a usar o Jasmine para elaborar vários testes em uma aplicação pré-existente. Eles testarão a lógica de negócios da aplicação, bem como o manuseio de eventos e a manipulação do DOM.


## Como isso ajudará na minha carreira?

Elaborar testes eficazes requer a análise de vários aspectos de uma aplicação, inclusive HTML, CSS e JavaScript - uma habilidade extremamente importante ao mudar de equipe ou ingressar em uma nova empresa.
Bons testes oferecem a capacidade de analisar rapidamente se o novo código danifica um recurso existente em sua base de código sem precisar testar manualmente toda a funcionalidade.


# Estratégia de desenvolvimento

Para uma atualização (ou referência) antes de começar a escrever o código, recomendamos revisar o conteúdo de [Teste de JavaScript] (https://www.udacity.com/course/javascript-testing--ud549). Seu projeto será avaliado por um revisor de código Udacity de acordo com a rubrica do projeto [Feed Reader Testing] (https://review.udacity.com/#!/rubrics/18/view). Por favor, revise os requisitos detalhados do projeto.  
  
  
  
  1. Familiarize-se com o código inicial
    * Abra o index.html e revise a funcionalidade do aplicativo dentro do seu navegador
    * O que o código em app.js fazendo? Não deixe de ler todos os comentários de código
    * Confira o "style.css". Como o estilo é aplicado ao aplicativo?

2. Explore o arquivo de especificações do Jasmine em feedreader.js
    * Este é o arquivo no qual você estará escrevendo seus testes
    * Certifique-se de ler todos os comentários do código aqui também
    * Revise a [documentação do Jasmine] (http://jasmine.github.io) se necessário

3. Edite a variável allFeeds em` app.js` para fazer com que o teste fornecido falhe
    * Veja como o Jasmine visualiza essa falha na sua aplicação
    * Retorna a variável allFeeds para um estado de passagem após revisar o teste com falha

4. Escreva um teste que faça um loop em cada feed no objeto allFeeds e garanta que ele tenha um URL definido _e_ que o URL não esteja vazio
    * Por exemplo, como você usaria um loop for ... of neste teste?

5. Escreva um teste que faça um loop em cada feed no objeto allFeeds e garanta que ele tenha um nome definido e que o nome não esteja vazio
    * Pense em como você escreveu o teste anterior. O que você está testando para este momento?

6. Escreva um novo conjunto de testes chamado " O menu "
    * O que você está descrevendo nesta suíte de testes?

7. Escreva um teste que garanta que o elemento de menu esteja oculto por padrão
    * Você terá que analisar o HTML e o CSS para determinar como a ocultação / exibição do elemento de menu é implementada
    * Qual código em app.js está diretamente envolvido com a ativação e desativação do menu?

8. Escreva um teste que garanta que o menu mude de visibilidade quando o ícone do menu for clicado. Este teste deve ter duas expectativas: o menu é exibido quando clicado e ele se oculta quando clicado novamente?
    * Pense em como você escreveu o teste anterior. O que é diferente desta vez?
    * Qual elemento clicável você está verificando?
    * Como você "simula" um clique do mouse naquele elemento sem realmente clicar nele?

9. Escreva um conjunto de testes chamado " Entradas Iniciais "
    * O que você está descrevendo nesta suíte de testes?

10. Escreva um teste que garanta que quando a função loadFeed é chamada e conclua seu trabalho, há pelo menos um único elemento` .entry` dentro do contêiner .feed
    * Como funciona a função beforeEach () do Jasmine?
    * Como funciona a função loadFeed () em app.js? É síncrono ou assíncrono?

11. Escreva um conjunto de testes chamado " New Feed Selection "
    * O que você está descrevendo nesta suíte de testes?

12. Escreva um teste que garanta quando um novo feed é carregado pela função `loadFeed
JavaScript Testing | Udacity
Learn how to iterate on your web applications with confidence using the red-green-refactor workflow cycle and automated testing frameworks.
[Foto]
` que o conteúdo realmente muda
    * Como este teste é diferente do teste anterior?

Além disso, observe que:

 * Nenhum teste deve depender dos resultados de outro
 * Os retornos de chamada devem ser usados ​​para garantir que os feeds sejam carregados antes de serem testados
 * O tratamento de erros deve ser implementado para variáveis ​​indefinidas e acesso à matriz fora do limite
 * Quando terminar, todos os seus testes devem passar

Quando terminar, escreva um arquivo README detalhando todas as etapas necessárias para executar o aplicativo com êxito. Se você adicionou testes adicionais, forneça documentação sobre quais são esses recursos futuros e o que os testes estão verificando.



