import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    inputsList: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput.trim() !== '') {
      const newInput = {
        id: uuidv4(),
        text: userInput,
      }
      this.setState(prevState => ({
        inputsList: [...prevState.inputsList, newInput],
        userInput: '',
      }))
    }
  }

  renderInputsList = () => {
    const {inputsList} = this.state
    if (inputsList.length === 0) {
      return (
        <div className="no-inputs-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-inputs-image"
          />
        </div>
      )
    }

    return (
      <ul className="inputs-list">
        {inputsList.map(each => (
          <li key={each.id} className="input-item">
            <p className="input-text">
              {each.text} : <span className="count">{each.text.length}</span>
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {userInput} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Character Counter</h1>
        <div className="counter-container">
          <div className="inputs-display">
            <h1 className="sub-heading">Count the characters like a Boss</h1>
            {this.renderInputsList()}
          </div>
          <form className="input-form" onSubmit={this.onAddInput}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="user-input"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
