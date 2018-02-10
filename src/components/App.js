import { Component } from 'react';

class App extends Component {
  state = {
    calendar: null
  }
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.setState(() => {
        calendar: store.getState()
      })
    })
  }
  submitFood = () => {
    store.dispatch()
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        />
      <button onClick={this.submitFood}>Submit</button>
        <pre>

        </pre>
      </div>
    )
  }
}

export default App;
