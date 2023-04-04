import React, { Component } from 'react'
import Item from './Item'

export class Items01 extends Component {
    render() {
        return (
            <div className=' conteiner'>
                <div className='main__card'>
                    {this.props.items.map(el => {
                        if(el.id < 10)
                        return <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
                    })}
                </div>
            </div>
        )
    }
}

export default Items01