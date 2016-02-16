(function () {

    angular
        .module('users')
        .controller('UserController', [
            '$log', '$scpope',
            NumbersController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function NumbersController($log, $scope){
        $scope.question = '';
        $scope.correct = '';
        $scope.name = 'César';
        $scope.questions = ['bat' , 'bi', 'hiru', 'lau'];
        $scope.corrects = [1,2,3,4];
        $scope.response = '';
        $scope.success = 'Gezurra';
        $scope.createQuestion = function(){
            var rand = Math.floor((Math.random() * $scope.questions.length) + 1);
            $scope.question = $scope.questions[rand];
            $scope.correct = $scope.corrects[rand];
        };
        $scope.checkResponse = function(){
            console.log($scope.response);
            console.log($scope.correct);
            if(Number($scope.response) == $scope.correct){
                $scope.success = 'Oso Ongi!!!';
            }else{
                $scope.success = 'Gezurra.';
            }

        }
    }
})();
