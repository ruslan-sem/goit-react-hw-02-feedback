import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = option => {
    this.setState(preState => ({ [option]: preState[option] + 1 }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={() => this.onClick('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.onClick('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.onClick('bad')}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}
