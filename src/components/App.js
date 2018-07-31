import React, { Component } from 'react'
import { addRecipe } from '../actions';

/**
 * O reducer é responsável por decidir o formato e o estado inicial da store e, quando uma action é despachada, o estado que ele retorna se torna o novo estado da store.
 * O estado do Redux é armazenado na store.
 * Uma action é um pacote de informações que descreve eventos modificadores de estado que ocorrem no aplicativo.
 * A store pode ser usada para despachar actions, obter o estado atual da store e acompanhar quaisquer mudanças.
 */

class App extends Component {
  state = {
    calendar: null
  }

  componentDidMount() {
    const { store } = this.props
    //store.subscribe(cb) recebe uma função listener de callback que será invocada sempre que o estado da store for alterado.
    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }

  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      // a action addRecipe recebe um objeto com os 1 objeto com 3 parametros day,recipe,meal 
      //dentro do reducer falamos que a meal é recipe.label por isso o novo objeto
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      },
    }))

    this.input.value = ''
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => this.input = input}
          placeholder="Monday breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monday breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    )
  }
}

export default App
