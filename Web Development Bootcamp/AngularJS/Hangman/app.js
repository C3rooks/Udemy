var app = angular.module("HangmanApp",[]);
app.controller("GameController",['$scope','$timeout',function($scope,$timeout){
var words = ["Riley","Max","Katlyn","Corey"];
$scope.incorrectLettersChosen=[];
$scope.correctLettersChosen=[];
$scope.guesses = 6;
$scope.displayWord ="";
$scope.input = {
    letter : ""
} 
var selectRandomWord = function()
{
    var index = Math.round(Math.random() * words.length);
    return words[index];
}

// $scope.randomWordTest = selectRandomWord(); 
var newGame = function()
{
    $scope.incorrectLettersChosen=[];
    $scope.correctLettersChosen=[];
    $scope.guesses = 6;
    $scope.displayWord ="";
    selectedWord = selectRandomWord();
    // $scope.randomWordTest = selectedWord;

    var tempDisplayWord = "";
    for (var index = 0; index < selectedWord.length; index++) {
        tempDisplayWord += "*";
    }
    $scope.displayWord = tempDisplayWord;
}

$scope.letterChosen = function(){
    for (var index = 0; index < $scope.correctLettersChosen.length; index++) {
        if($scope.correctLettersChosen[index].toLowerCase()===$scope.input.letter.toLowerCase()){
            $scope.input.letter = "";
            return;
        }
        
    }
    for (var index = 0; index < $scope.incorrectLettersChosen.length; index++) {
        if($scope.incorrectLettersChosen[index].toLowerCase()===$scope.input.letter.toLowerCase()){
            $scope.input.letter = "";
            return;
        }
        
    }

    var correct = false; 
    for (var index = 0; index < selectedWord.length; index++) {
        if(selectedWord[index].toLowerCase() === $scope.input.letter.toLowerCase())
            {
                $scope.displayWord = $scope.displayWord.slice(0,index)+ $scope.input.letter.toLowerCase() + $scope.displayWord.slice(index+1);
                correct = true;
            }

        
    }
    if(correct){
        $scope.correctLettersChosen.push($scope.input.letter.toLowerCase()); 
    }else{
        $scope.guesses--; 
        $scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase()); 
    }
    $scope.input.letter = "";
    if($scope.guesses == 0){
        
        $timeout(function(){
            newGame(); 

        },500);
    }
    if($scope.displayWord.indexOf("*")==-1){
       
        $timeout(function(){
            newGame(); 

        },500);
    }

}

newGame(); 

}])