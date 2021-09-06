
import React, { useState,useEffect} from 'react';
import'./quiz.css';

const QuizApp=()=> {
	const questions = [
		{
			questionText: '------ is the capital of Uttarakhand.?',
			answerOptions: [
				{ answerText: 'Lucknow', isCorrect: false },
				{ answerText: 'Prayagraj (Allahabad)', isCorrect: false },
				{ answerText: 'Dehradun', isCorrect: true },
				{ answerText: 'Shimla', isCorrect: false },
			],
		},
		{
			questionText: 'Kolkata is the capital of which eastern state??',
			answerOptions: [
				{ answerText: 'West Bengal', isCorrect: true },
				{ answerText: 'Odisha (Orissa)', isCorrect: false },
				{ answerText: 'Jharkhand', isCorrect: false },
				{ answerText: 'Tripura', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},

            {
			questionText: 'What percentage of population of Maharashtra is litrate as per 2011 census?',
			answerOptions: [
				{ answerText: '82.3%', isCorrect: true },
				{ answerText: '79.6%', isCorrect: false },
				{ answerText: '86.7%', isCorrect: false },
				{ answerText: '80.8%', isCorrect: false },
			],
		},

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const[counter,setCounter]=useState(60);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


    useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);

	return (
		<div className='app'>
            <h3 className='heading'>Test your Knowledge take short quiz</h3>
			{ counter===0&&showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                        <h6 className='timer'>*wait for timer end for result</h6>
					</div>
                    
				</>
			)}
              {/* {score && score >=3?'congratulations':''} */}
            <p className='time'>timer:{counter}</p>
            {
                counter===0?'timeout':""   
            }
		</div>
	);
}
 export default QuizApp;
