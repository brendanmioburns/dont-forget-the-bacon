import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

function mapStateToProps(calendarStateFromStore) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.assign({}, calendarStateFromStore[day])
    }))
  }
}

export default App;
