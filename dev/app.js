import {h, Component} from 'composi'
import {title} from './components/title'
import {Counter} from './components/counters'
import {counters} from './components/counters'
import {counterSum} from './components/counterSum'
import {uuid} from './components/uuid'

title.state = 'Composi - Counters'


// Callback for adding counter
const addCounter = () => {
  const counter =  new Counter({
    element: '#counter',  
    state: {disabled: false, number: 1, id: uuid()},
    componentDidRender: (component) => {
      console.log(`Just rendered the counter. It's new value is: ${counter.state.number}.`)
    },
    componentWillUnmount: () => {
      console.log(`Just deleted the counter.`)
    }
  })
  counter.update()
  // Add new counter to counter tracker:
  counters.push(counter)
  counterSum.state = counters.reduce((a,b) => a + b.state.number, 0)
}

// Add first counter:
addCounter()

// Setup event to add new counter:
document.querySelector('#addCounter').addEventListener('click', addCounter)