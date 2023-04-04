import React, { Component } from 'react'
import Item from './Item'

export class Items03 extends Component {
    render() {
        return (
            <div className='conteiner'>
                <div className='main__card'>
                    {this.props.items.map(el => {
                        if(el.id >= 19)
                        return <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
                    })} 
                </div>
            </div>
        )
    }
}

export default Items03