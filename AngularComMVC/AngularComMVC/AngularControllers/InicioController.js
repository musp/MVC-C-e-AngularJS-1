var angularComMVC = angular.module('angularComMVC', []);

"use strict";
angularComMVC.controller("InicioController", InicioController);
InicioController.$inject = ['$scope', 'InicioServico'];
function InicioController($scope, InicioServico) {
    //O código descrito abaixo define a estrutura que a minha página inicial precisa ter para garantir a comunicação com as demais funcionalidades.
    var InicioControle = {
        Operacoes: {},
        ParametrosIniciais: {},
        DadosDeTransporte: {},
    };

    InicioControle.ParametrosIniciais = {
        Cabecalho: { titulo: 'Aqui é o Cabeçalho da Minha Página' },
        Corpo: { titulo: 'Aqui é o Corpo da Minha Página' },
        MunuDeFuncionalidades: []
    };

    InicioControle.Operacoes = {
        //Para evitar execuções de funções no próprio corpo de nosso controller iremos utilizar a diretiva ng-init, que utilizara o caminho de função abaixo, a fim de carregar os dados iniciais pertinentes a este controller angular.
        CarregamentoInicial: _CarregamentoInicial,
        Carregamento: _Carregamento
    }
    //A complexidade desnecessária escrita serve para instruir
    function _Carregamento() {
        InicioControle.ParametrosIniciais.MunuDeFuncionalidades.push({ caminho: '', titulo: 'Pessoa' });
    }

    function _CarregamentoInicial() {
        //Caso haja necessidade de receber os links conforme permissão, basta fazer o push da lista de permissões recebidas.
        InicioControle.Operacoes.Carregamento();
    }

    function inicial() {

    }
    //Aqui é definido o objeto que será manipulado em nosso html, será um dos padroes adotados.
    $scope.InicioCtrl = InicioControle

}