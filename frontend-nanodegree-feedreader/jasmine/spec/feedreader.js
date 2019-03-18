/* feedreader.js
 
/* Todos os testes dentro da funcao $() function, alguns desses testes 
podem requerer elementos DOM. Para garantir que eles sejam executados 
até que o DOM esteja pronto.
 
 */

$(function () {
    /* Esta é a nossa primeira suíte de testes - uma suíte de testes contém apenas
    um conjunto relacionado de testes. Esta suite é toda sobre o RSS
    alimenta definições, a variável allFeeds em nossa aplicação.
   */

    describe('RSS Feeds', function () {
        
        /* Este é o nosso primeiro teste - ele testa para garantir que o
        allFeeds variável foi definida e que não é
        vazio Experimente isso antes de começar
        o resto deste projeto. O que acontece quando você muda
        allFeeds em app.js para ser uma matriz vazia e atualizar o
        página?
        */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Escreva um teste que faça um loop em cada feed
         no objeto allFeeds. Garanta que ele tenha um URL definido
         e que o URL não está inválida. FEITO
        */ 
        it('hasUrl', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        })

        /*  TODO: Escreva um teste que faça um loop em cada feed
         no objeto allFeeds e garanta que ele tenha um nome definido
         e que o nome não está invalido. FEITO
         */ 

        
        it('hasName', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Escreva um novo teste "The menu" */
    describe('theMenu', function () {
        let body = $('body'),
            btn = $('.menu-icon-link');

        /* TODO: Escreva um teste que garanta que o elemento de menu seja
            escondido por padrão. Você terá que analisar o HTML e
            o CSS para determinar como estamos executando o
            ocultação / exibição do elemento de menu. FEITO
         */

        it('menuIsHidden', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);//hidden
        });

        /* TODO: Escreva um teste que garanta as mudanças no menu
          visibilidade quando o ícone do menu é clicado. Esse teste
          deve ter duas expectativas: o menu exibe quando
          clicado e oculta quando clicado novamente. FEITO
         */
        it('checkVisibility', function () {

            btn.click();
            expect(body.hasClass('menu-hidden')).not.toBe(true);
            btn.click();
            expect(body.hasClass('menu-hidden')).toBe(true);

        });


    });

    /* TODO: Escreva uma nova suite de teste chamado "Initial Entries" */
    describe('initialEntries', function () {

        /* TODO: Escreva um teste que garanta quando a função loadFeed
            é chamada e completa seu trabalho, há pelo menos
             um único elemento .entry dentro do contêiner .feed.
             Lembre-se, loadFeed() é assíncrono, então esse teste exigirá
             o uso da função beforeEach e assynchronous done() de Jasmine. FEITO
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('hasEntry', function () {
            let entries = $('.feed .entry').length;
            expect(entries).not.toBe(0);
        });
    });

    /* TODO: Escreva uma nova suite de teste chamado "New Feed Selection"*/
    describe('newFeedSelection', function () {

        /* TODO: Escreva um teste que garanta quando um novo feed é carregado
         pela função loadFeed e que o conteúdo realmente muda.
         Lembre-se, loadFeed() é assíncrono.
         */       

        beforeEach(function (done) {
            loadFeed(0, function () {
                textFirst = $('.entry').text();
                loadFeed(1, function () {
                    done();
                });
            });
        });

        it("newFeedIsLoaded", function () {
            let paragraph = $('.entry').text();
            expect(textFirst).not.toEqual(paragraph);
        });
    });
}());