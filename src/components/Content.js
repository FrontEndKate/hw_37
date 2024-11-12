import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchQuestion, resetQuiz, selectAnswer} from "../redux/slices/quizSlice";
import './Content.css'

const Content = () => {
    const dispatch = useDispatch();
    const {question, options, selectedAnswer, isCorrect, correctAnswer, loading, error } = useSelector((state) => state.quiz);

    useEffect(() => {dispatch(fetchQuestion());}, []);

    const handleNewQuestion = () => {
        dispatch(resetQuiz());
        dispatch(fetchQuestion());
    };

    if (loading) return <div className="content"><p>Loading...</p></div>;
    if (error) return <div className="content"> <p> Error: {error}</p>
        <button onClick={handleNewQuestion}>Next Question</button>
        </div>;

    return (
        <div className="content">
        <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index} onClick={() => dispatch(selectAnswer(option))}
                        className={selectedAnswer === option ? "selected" : ""}>
                        {option}
                    </li>
                ))}
            </ul>
            {selectedAnswer && (
                <div>
                    {isCorrect ? (<p className="correct">Correct!</p>) : (<p className="incorrect">Incorrect. The correct answer is {correctAnswer}.</p>)}
                </div>
            )}
            <button onClick={handleNewQuestion}>Next Question</button>
        </div>
    );
};

export default Content;