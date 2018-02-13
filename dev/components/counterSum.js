import {h, Component} from 'composi'

export const counterSum = new Component({
  container: 'section',
  state: 0,
  render: (sum) => (
    <p id='sum'>
      <span>The sum of all counters is: </span>
      <strong>{sum}</strong>
    </p>
  )
})
