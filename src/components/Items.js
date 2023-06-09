import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <div className='main__card'>
                {this.props.items.map(el => {
                    
                    return <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
    })}
            </div>
        )
    }
}

export default Items