import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
        <div className='full-item'>
            <div>
                <img src={'./images/' + this.props.item.img} alt='' onClick={() => this.props.onShowItem(this.props.item)}/>
                <div className='description'>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b><span className='brend'>Brend:</span> {this.props.item.brend}</b>
                <p>{this.props.item.size}  {this.props.item.typesize}</p>
                <b>{this.props.item.price} ₸</b>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>в корзину<img alt=''></img> </div>
                </div>
                </div>
        </div>
        )
    }
}
export default ShowFullItem