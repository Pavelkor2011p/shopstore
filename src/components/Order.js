import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export default class Order extends Component {
    render() {
        return (
        <div className='item'>
            <img src={'./images/' + this.props.item.img} alt=''/>
            <h2>{this.props.item.title}</h2>
            <b><span className='brend'>Brend:</span> {this.props.item.brend}</b>
            <b>{this.props.item.price} ₸</b>
            <div className='delete-icon_wrap'>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        </div>
        )
    }
}
