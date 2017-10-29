import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field
        const className = `form-group ${ touched && error ? 'has-danger': ''}`

        return (
            <div className={ className }>
                <label>{ field.label }</label>
                <input
                    className="form-control"
                    type='text'
                    { ... field.input }
                />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => this.props.history.push('/'))
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <Field
                    label='Title'
                    name='title'
                    component={ this.renderField }
                />
                <Field
                    label='Categories'
                    name='categories'
                    component={ this.renderField }
                />
                <Field
                    label='Post Content'
                    name='content'
                    component={ this.renderField }
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    !values.title && (errors.title = 'Enter a title')
    !values.categories && (errors.categories = 'Enter some categories')
    !values.content && (errors.content = 'Enter some content please')

    return errors
}

export default reduxForm({
    // Name of the form?!
    form: 'PostsNewForm',
    validate
})(connect(null, { createPost })(PostsNew))