index.$inject = ['$scope'];
function index(scope) {
    var init = function () {
        scope.step = 0;
        scope.accuracy = 0;
        scope.questions = questions.sort(function (q1, q2) {
            return Math.random() > 0.5 ? -1 : 1;
        });
        nextQuestion();
    }

    var nextQuestion = function () {
        var question = scope.questions.shift();
        scope.current = {
            question: question.question,
            options: question.options.sort(function (o1, o2) {
                return Math.random() > 0.5 ? -1 : 1;
            }),
            answer: question.answer
        }
    }

    var searchAnswer = function (option) {
        if (option == scope.current.answer) {
            scope.accuracy++;
        }
        else {
            scope.error++;
        }
        if (scope.questions.length) {
            nextQuestion();
        }
        else {
            end();
        }
    }

    var starting = function () {
        scope.step = 1;
    }

    var end = function () {
        scope.scores =scope.accuracy*10;
        scope.step = 2;
    }

    scope.starting = starting;
    scope.end=end;
    scope.searchAnswer=searchAnswer;
    scope.nextQuestion=nextQuestion;
    init();
}

app.controller('index', index);