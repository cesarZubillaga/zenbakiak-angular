(function () {

    angular
        .module('numbers')
        .controller('NumberController', [
            '$log', '$scope', '$interval', '$timeout',
            NumberController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function NumberController($log, $scope, $interval, $timeout) {
        $scope.question = '';
        $scope.correct = '';
        $scope.name = 'César';
        //$scope.questions = ['bat', 'bi', 'hiru'];
        $scope.questions = ['bat', 'bi', 'hiru', 'lau', 'bost', 'sei', 'zazpi', 'zortzi', 'bederatzi', 'hamar'];
        //$scope.corrects = [1, 2, 3];
        $scope.corrects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        $scope.response = '';
        $scope.success = 'Gezurra';
        $scope.seconds = 0;
        $scope.initTime = null;
        $scope.timeUp = 0;
        $scope.intervalId = null;

        $scope.results = {
            user: {
                name: 'César',
                email: 'cesar.zubillaga85@gmail.com',
            },
            times:{

            }
        };

        $scope.createQuestion = function () {

            if ($scope.initTime == null) {
                $scope.initTime = Date.now();
                $scope.intervalId = $interval(function () {
                    $scope.timeUp = Date.now() - $scope.initTime;
                }, 1000);
            }

            var rand = Math.floor((Math.random() * $scope.questions.length));
            $log.debug('Random ' + rand);
            $log.debug('Questions length ' + $scope.questions.length);
            $scope.question = $scope.questions[rand];
            $scope.correct = $scope.corrects[rand];
        };

        $scope.checkResponse = function () {
            if (Number($scope.response) == $scope.correct) {
                $scope.success = 'Oso Ongi!!!';
                var question = $scope.question;
                $scope.questions = $scope.questions.filter(function (el) {
                    if (el != question) {
                        return el;
                    }
                });
                var correct = $scope.correct;
                $scope.corrects = $scope.corrects.filter(function (el) {
                    if (el != correct) {
                        return el;
                    }
                });
                $timeout(function () {
                    $scope.response = null;
                }, 150);
                console.log($scope.questions.length);
     //           if ($scope.corrects.length <= 0) {
       //             $interval(clearInterval, $scope.intervalId);
         //       } else {
                    $scope.createQuestion();
           //     }

            } else {
                $scope.success = 'Gezurra.';
            }
        }

        $scope.updateLevel = function(){
            $scope.results.times.push($scope.initTime);
            $scope.initTime = null;
            $scope.questions = ['bat', 'bi', 'hiru'];
            //$scope.questions = ['bat', 'bi', 'hiru', 'lau', 'bost', 'sei', 'zazpi', 'zortzi', 'bederatzi', 'hamar'];
            $scope.corrects = [1, 2, 3];
            //$scope.corrects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }

    }
})();
