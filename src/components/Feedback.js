import React, { Component } from 'react';
import FeedbackButton from './FeedbeackButton';

class Feedback extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    return (
      <div>
        <h1>Pleas leave feedback</h1>
        <FeedbackButton
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
      </div>
    );
  }
}

export default Feedback;
