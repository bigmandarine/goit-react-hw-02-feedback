import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'components/Statistic/Statistic';
import { Section } from './Section/Section';
import { NotificationMessage } from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = method => {
    this.setState(prevState => ({
      [method]: prevState[method] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + bad + neutral;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };
  render() {
    const totalFeedback = this.countTotalFeedback();
    const feedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={totalFeedback}
              countPositiveFeedbackPercentage={feedbackPercentage}
            />
          ) : (
            <NotificationMessage message="There is no feedback"></NotificationMessage>
          )}
        </Section>
      </>
    );
  }
}

export default App;
