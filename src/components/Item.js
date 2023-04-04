import React, { Component } from 'react'


export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img src={'./images/' + this.props.item.img} alt='foto' onClick={() => this.props.onShowItem(this.props.item)}/>
                <div className='description'>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <p>Цена: <b><span className='brend'>{this.props.item.price} ₸</span></b></p>
                    <b><span className='brend'>Brend:</span> {this.props.item.brend}</b>
                    <p>{this.props.item.size}  {this.props.item.typesize}</p>
                    <b>{this.props.item.price} ₸</b>
                    <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>в корзину<img alt=''></img> </div>
                </div>
            </div>
        )
    }
}

export default Item
