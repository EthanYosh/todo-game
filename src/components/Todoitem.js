import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoitem extends Component {


    getStyle = () => {
        return {
            textDecoration: this.props.eachtodo.completed ? 'line-through' : 'none',
            background: 'lightgray',
            padding: '9px',
            borderBottom: '1px darkgray dotted'
        }
    }


    render() {
        const {id, title} = this.props.eachtodo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}
                {title}
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    eachtodo: PropTypes.object.isRequired
}


