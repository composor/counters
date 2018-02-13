import {h, Component} from 'composi'
import {title} from './components/title'
import {Counter} from './components/counters'
import {counters} from './components/counters'
import {counterSum} from './components/counterSum'
import {uuid} from './components/uuid'

window.counters = counters

// Set state on component.
// Will cause component to render.
title.state = 'Counters Example'

// Callback for adding counter
const addCounter = () => {
  const counter =  new Counter()
  // Add new counter to counter tracker:
  counters.push(counter)
  counterSum.state = counters.reduce((a,b) => a + b.state.number, 0)
}

// Add first counter:
addCounter()

// Setup event to add new counter:
document.querySelector('#addCounter').addEventListener('click', addCounter)
