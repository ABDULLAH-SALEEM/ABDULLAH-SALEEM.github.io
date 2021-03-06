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
    },
    {
        question: 'Q6: What is squareRoot(2)?',
        optionA: 2,
        optionB: 1.41,
        optionC: 3.00,
        answer: 'optionB'
    },
    {
        question: 'Q7: What is log(2)?',
        optionA: 0.3,
        optionB: 1,
        optionC: 7,
        answer: 'optionA'
    },
    {
        question: 'Q8: What is sin(2)?',
        optionA: 5,
        optionB: 0.03,
        optionC: 16,
        answer: 'optionB'
    },
    {
        question: 'Q9: What is cos(2)?',
        optionA: 0.99,
        optionB: 0.03,
        optionC: 16,
        answer: 'optionA'
    },
    {
        question: 'Q10: What is tan(2)?',
        optionA: 11,
        optionB: 0.03,
        optionC: 16,
        answer: 'optionB'
    }
]
var score = 0;
var questionCount = 0;
function start() {
    document.getElementById('timer').style.display='block';
    const startingMinutes=10;
    let time=startingMinutes*60;
    const countdownEl=document.getElementById('timer');
    setInterval(updateCountdown,1000);
    function updateCountdown(){
        const minutes=Math.floor(time/60);
        let seconds=time%60;
        seconds=seconds<10?'0'+seconds:seconds;
        countdownEl.innerHTML='Time Remaining: '+`${minutes}:${seconds}`;
        time--;
    }
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
    if (questionCount < 10) {
        // if(correctAnswer[i].checked==true){
        //     document.getElementById('next').disabled='false';
        // }else if (!correctAnswer[i].checked==false){
        //     document.getElementById('next').disabled='true';
        // }
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
        document.getElementById('timer').style.display='none';
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
