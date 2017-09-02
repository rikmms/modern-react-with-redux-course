import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBVAwOIoWBPTBx8dyiE3SD4JVGPeaNrEQ4'

const App = () => (<div>
  <SearchBar />
</div>)

// Is necessary to pass a component's instance! 
// JSX creates component instances (see in the Babel's online repl)
ReactDOM.render(<App />, document.querySelector('#app'))