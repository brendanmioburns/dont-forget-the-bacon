import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';
import { capitalize } from '../utils/helpers';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';

class App extends Component {
  render() {
    const { calendar, remove } = this.props
    const mealOrder = ['breakfast', 'lunch', 'dinner']

    return (
      <div className='container'>
        <ul className='meal-types'>
          {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))}
        </ul>

        <div className="calendar">
          <div className="days">
            {calendar.map(({ day }) => <h3 key={day} className="subheader">{capitalize(day)}</h3>)}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ food, calendar }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null

        return meals
      }, {})
    })),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
