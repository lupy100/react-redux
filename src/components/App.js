import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  doThing = () => {
    this.props.dispatch(addRecipe({

    }))
    //ou com o mapDispatchToProps
    this.props.selectRecipe({

    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        Hello world
      </div>
    )
  }
}

const mapStateToProps = (calendar) => {
  console.log(calendar)
  return {
    calendar: Object.keys(calendar)
      .map((day) => ({
        day,
        meals: { ...calendar[day] }
      }))
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => {
      dispatch(removeFromCalendar(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
