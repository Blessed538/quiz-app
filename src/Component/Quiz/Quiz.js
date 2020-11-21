import React from 'react';
import Question from '../Questions/Question';
import QuestionCount from '../QuestionCount/QuestionCount';
import AnswerOption from '../AnswerOption/AnswerOption';


function Quiz(props) {
console.log(props.answerOptions)

function renderAnswerOptions(key) {

  return (
    <AnswerOption
      key={key.content}
      answerContent={key.content}
      answerType={key.type}
      answer={props.answer}
      questionId={props.questionId}
      onAnswerSelected={props.onAnswerSelected}
    />
  );
}

  return (
    <div key={props.questionId}>
    <QuestionCount counter={props.questionId} total={props.questionTotal} />
    <Question content={props.question} />
    <ul className="answerOptions">
      {props.answerOptions.map(renderAnswerOptions)}
    </ul>
  </div>
    
  )
}


export default Quiz;