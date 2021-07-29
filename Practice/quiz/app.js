let mcQs = [
    {
        question: 'Q1: What is 2x3?',
        optionA: 6,
        optionB: 7,
        optionC: 8,
        answer: 'optionA'
    },
    {
        question: 'Q2: What is 2+2?',
        optionA: 4,
        optionB: 6,
        optionC: 9,
        answer: 'optionA'
    },
    {
        question: 'Q3: What is 2/2?',
        optionA: 0,
        optionB: 1,
        optionC: 2,
        answer: 'optionB'
    },
    {
        question: 'Q4: What is 2^3?',
        optionA: 16,
        optionB: 10,
        optionC: 8,
        answer: 'optionC'
    },
    {
        question: 'Q5: What is 2^4?',
        optionA: 5,
        optionB: 9,
        optionC: 16,
        answer: 'optionC'
    }

]
var score = 0;
var questionCount = 0;
function start() {
    document.getElementById('startQuiz').style.display = 'none';
    document.getElementById('mcqsArea').style.display = 'block';
    document.getElementById('question').innerHTML = mcQs[questionCount]['question'];
    document.getElementById('optA').innerHTML = mcQs[questionCount]['optionA'];
    document.getElementById('optB').innerHTML = mcQs[questionCount]['optionB'];
    document.getElementById('optC').innerHTML = mcQs[questionCount]['optionC'];
    questionCount++;
}
var nextFunc = function next() {
    var correctAnswer = document.getElementsByName('answer');
    if (questionCount < 5) {
        document.getElementById('question').innerHTML = mcQs[questionCount]['question'];
        document.getElementById('optA').innerHTML = mcQs[questionCount]['optionA'];
        document.getElementById('optB').innerHTML = mcQs[questionCount]['optionB'];
        document.getElementById('optC').innerHTML = mcQs[questionCount]['optionC'];
        for (var i = 0; i < correctAnswer.length; i++) {
            if (correctAnswer[i].checked) {
                if (correctAnswer[i].value === mcQs[questionCount - 1].answer) {
                    score++;
                }
                correctAnswer[i].checked=false;
            }
        }
        questionCount++;
    } else {
        for (var i = 0; i < correctAnswer.length; i++) {
            if (correctAnswer[i].checked) {
                if (correctAnswer[i].value === mcQs[questionCount - 1].answer) {
                    score++;
                }
            }
        }
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').innerHTML = "Quiz done <br> Total No Of Questions:" + ' ' + questionCount + '<br>' + 'Total Corrected Answers: ' + score + '<br>' + '<br>' + 'You Scored : ' + score + '<br>' + "Your Percentage is: " + (score / questionCount) * 100 + '%';
        document.getElementById('mcqsArea').style.display = 'none';
        if ((score / questionCount) * 100 < 50) {
            document.getElementById('status').style.display = 'block';
            document.getElementById('status').style.color = 'red';
            document.getElementById('status').innerHTML = "You Failed The Quiz";
            document.getElementById('tryAgain').style.display = 'block';
        } else {
            document.getElementById('status').style.display = 'block';
            document.getElementById('status').style.color = 'green';
            document.getElementById('status').innerHTML = "You Passed The QUIZ";
            document.getElementById('tryAgain').style.display = 'block';
        }
    }

}
