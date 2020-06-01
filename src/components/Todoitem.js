import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoitem extends Component {


    getStyle = () => {
        return {
            textDecoration: this.props.eachtodo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.eachtodo.title}</p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    eachtodo: PropTypes.object.isRequired
}


