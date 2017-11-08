import {h, Component} from 'composi'
import {counterSum} from './counterSum'
import {uuid} from './uuid'

export const counters = []

export class Counter extends Component {
  constructor (opts) {
    super(opts)
  }

  render(data) {
    const {disabled, number} = data
    return (
      <div class='counter' id={uuid()}>
        <button disabled={disabled} onclick={this.decrease.bind(this)} id="decrease">-</button>
        <span>{number}</span>
        <button onclick={() => this.increase()} id="increase">+</button>
        <button onclick={() => this.delete()}>Delete</button>
      </div>
    )
  }

  increase() {
    this.setState({disabled: false, number: this.state.number + 1})
    counterSum.state = counters.reduce((a,b) => a + b.state.number, 0)
  }

  decrease() {
    if (this.state.number < 2) {
      this.setState({disabled: true, number: this.state.number - 1})
      counterSum.state = counters.reduce((a,b) => a + b.state.number, 0)
    } else {
      this.setState({disabled: false, number: this.state.number - 1})
      counterSum.state = counters.reduce((a,b) => a + b.state.number, 0)
    }
  }
  
  delete() {
    const id = this.state.id
    const counter = counters.filter(counter => id == counter.state.id)[0]
    const position = counters.indexOf(counter)
    counters.splice(position, 1)
    counter.unmount()
    counterSum.state = counters.reduce((a,b) => a + b.state.number, 0)
  }

  sum(number) {
    this.state = this.state.number + number
  }
}
