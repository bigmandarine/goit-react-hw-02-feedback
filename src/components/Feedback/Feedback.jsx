import React, { Component } from 'react';
import { FeedbackButtonsStyle } from './Feedback.styled';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = evt => {
    if (evt.target.name === 'good') {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    } else if (evt.target.name === 'neutral') {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    } else if (evt.target.name === 'bad') {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + bad + neutral;
    return total;
  };
  render() {
    const total = this.countTotalFeedback();
    return (
      <div>
        <p>Please leave feedback</p>
        <div>
          <FeedbackButtonsStyle
            type="button"
            name="good"
            onClick={this.onBtnClick}
          >
            Good
          </FeedbackButtonsStyle>
          <FeedbackButtonsStyle
            type="button"
            name="neutral"
            onClick={this.onBtnClick}
          >
            Neutral
          </FeedbackButtonsStyle>
          <FeedbackButtonsStyle
            type="button"
            name="bad"
            onClick={this.onBtnClick}
          >
            Bad
          </FeedbackButtonsStyle>
        </div>
        <p>Statistics:</p>
        <ul>
          <li>
            Good:<span>{this.state.good}</span>
          </li>
          <li>
            Netural:<span>{this.state.neutral}</span>
          </li>
          <li>
            Bad:<span>{this.state.bad}</span>
          </li>
          <li>
            Total:
            <span>{total}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
