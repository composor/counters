import {h, Component} from 'composi'

export const title = new Component({
  container: 'header',
  render: (message) => {
    return (
      <nav>
        <h1>Composi {message}</h1>
      </nav>
    )
  }
})
