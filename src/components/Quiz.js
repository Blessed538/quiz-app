import React, { Component } from 'react';
import { quizdata } from './Quizdata';

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizfind: false,
      score: 0,
      disabled: true,
    };
  }

  loadQuiz = () => {
    const { currentIndex } = this.state;
    this.setState({
      question: quizdata[currentIndex].question,
      option: quizdata[currentIndex].option,
      answer: quizdata[currentIndex].answer,
    });
  };

  nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
    });
  };

  componentDidMount() {
    const { currentIndex } = this.state;
    this.setState({
      question: quizdata[currentIndex].question,
      options: quizdata[currentIndex].option,
      answer: quizdata[currentIndex].answer,
    });
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: quizdata[currentIndex].question,
          option: quizdata[currentIndex].options,
          answer: quizdata[currentIndex].answer,
        };
      });
    }
  }

  finishHandler = () => {
    if(this.state.currentIndex === quizdata.length - 1){
      this.setState({
        quizfind:true
      })
    }
  }

  render() {
    const {
      question,
      options,
      currentIndex,
      userAnswer,
      quizfind,
    } = this.state;

    if(quizdata){
      return (
        <div>
          <h1>Game Over, final score is {this.state.score} points</h1>
          <p>The correct Answers for the quiz</p>
          <ul>
            {
              quizdata.map((item, index) => (
                <li className={index}>{item.answer}</li>
              ))
    }
          </ul>
        </div>
      )
    }
    return (
      <div>
        <h2>{question}</h2>
        <span>{`question ${currentIndex + 1} of ${quizdata.length}`}</span>
        {options.map((option) => (
          <p
            key={option.id}
            className={`options ${userAnswer === option ? 'selected' : null}`}
            onClick={() => this.checkAnswer(option)}
          >
            {option}
          </p>
        ))}

        {currentIndex < quizdata.length - 1 && (
          <button  onClick={this.nextQuestionHandler}>Next Question</button>
        )}

        {currentIndex === quizdata.length -1 && <button onClick={this.finishHandler} disabled={this.state.disabled} >
          Finish
          </button>
          }
      </div>
    );
  }
}

export default Quiz;
