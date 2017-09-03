import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions'

class BookList extends Component {

  renderList() {
    return this.props.books.map(book => 
      <li 
        key={ book.title } 
        onClick={ () => this.props.selectBook(book) }
        className="list-group-item">
        { book.title }
      </li>)
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

// Whatever is returned will show up props 
// inside of BookList
const mapStateToProps = (state) => ({ 
  books: state.books 
})

// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = dispatch => 
  // Whenever selectBook is called, the result should be passed to all of our reducers
  bindActionCreators({ selectBook }, dispatch)

// Promot BookList from a component to a container - it needs to know 
// about this new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)