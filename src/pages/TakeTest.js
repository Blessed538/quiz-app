import React, { Component } from 'react';
import quizQuestions from '../Component/quizQuestion/quizQuestion';
import Quiz from '../Component/Quiz/Quiz';
import Result from '../Component/Results';
import Footer from '../Component/Footer';


class TakeTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      checked: false,
    };
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      this.shuffleArray(question.answers)
    );

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  setUserAnswer = (answer) => {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  };

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    });
    this.handleAnswerSelected();
  };
   
  setPrevQuestion = () => {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    });
  };



  handleAnswerSelected = (event) => {
    // this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId > quizQuestions.length) {
      setTimeout(() => this.setResults(this.getResults()), 300);
      // setTimeout(() => this.setNextQuestion(), 300);
    } else {
      this.getResults();
      // setTimeout(() => this.setResults(this.getResults()), 300);
    }
  };

  getResults = () => {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  };

  setResults = (result) => {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  };

  2;
  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  };

  renderResult = () => {
    return <Result quizResult={this.state.result} />;
  };

  render() {
    return (
      <div className="App">
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <Footer setNextQuestion={this.setNextQuestion}
        setPrevQuestion={this.setPrevQuestion} 
      
        />
      </div>
    );
  }
}

export default TakeTest;
