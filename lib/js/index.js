angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "Pedro", telefone: "99998888", cor:"blue"},
        {nome: "Ana", telefone: "99998877", cor:"yellow"},
        {nome: "Maria", telefone: "99998866", cor:"red"}
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular"},
        {nome: "Vivo", codigo: 15, categoria: "Celular"},
        {nome: "Tim", codigo: 41, categoria: "Celular"},
        {nome: "GVT", codigo: 25, categoria: "Fixo"},
        {nome: "Embratel", codigo: 21, categoria: "Fixo"}
    ];
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
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
});