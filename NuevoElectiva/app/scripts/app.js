'use strict';

/**
 * @ngdoc overview
 * @name angularjsAgilApp
 * @description
 * # angularjsAgilApp
 *
 * Main module of the application.
 */
angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope, $http) {

        $scope.reposLoaded = false;
        $scope.userLoaded = false;
        $scope.isLoged=false;
        $scope.username = 'rafaelest';
        var nombreTipeado='';

        //var a = document.getElementById(pagina_central);
        //a.style='visibility: visible; display:block;';


        var loadRepos = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
        };

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
       });

        /*$scope.function refrescarNombre(nuevo){
          nombreTipeado=nuevo;
          console.log(nombreTipeado);
        }

        $scope.$watch('username', function(nuevo, viejo) {
          refrescarNombre(nuevo);
        }, true);

        $scope.usuarioLogeado = function () {
          console.log(nombreTipeado);

        };*/
        $scope.predicate = '-updated_at';


}]);
