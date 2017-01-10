
indexController.$inject = ['$scope'];

function indexController(scope){
    scope.text="Hello Word";
}

app.controller('indexController',indexController);