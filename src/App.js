import { Component } from 'react';
import Container from './components/Container';
import Feedback from './components/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leveFeedback = option => {
    console.log('option', option);

    this.setState({ [option]: this.state[option] + 1 });
  };

  // feedbackSum = option => {
  //   return this.state[option].reduce(
  //     (total, value) => console.log('total', total, 'value', value),
  //     0,
  //   );
  // };

  render() {
    // const totalFeedback = this.feedbackSum();
    console.log(this.leveFeedback);
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.leveFeedback}
        />
        <div>
          <h2>statistics</h2>
          <p>good:{good}</p>
          <p>neutral:{neutral}</p>
          <p>bad:{bad}</p>
        </div>
      </Container>
    );
  }
}

export default App;
// onLeaveFeedback = {};
