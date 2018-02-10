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
  render() {
    return (
      'Hello World'
    )
  }
}

export default App;
