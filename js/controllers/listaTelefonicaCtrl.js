angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    let carregarContatos = function () {
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data;
        }).error(function (data, status){
            $scope.message = "Aconteceu um problema: " + data;
        });
    };

    let carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data){
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        let addContato = new Contato(contato);
        $scope.contatos.push(angular.copy(contato));
        contatosAPI.saveContato(contato).success(function (data){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato){
            if(!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato){
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});