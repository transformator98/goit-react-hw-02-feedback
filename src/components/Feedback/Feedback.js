import { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <button>good</button>
          <button>neutral</button>
          <button>bad</button>
        </section>
        <section>
          <h2>statistics</h2>
          <p>good:{}</p>
          <p>neutral:{}</p>
          <p>bad:{}</p>
        </section>
      </>
    );
  }
}
