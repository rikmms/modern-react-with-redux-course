import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <div>Hi!!!</div>

// Is necessary to pass a component's instance! 
// JSX creates component instances (see in the Babel's online repl)
ReactDOM.render(<App />, document.querySelector('.container'))