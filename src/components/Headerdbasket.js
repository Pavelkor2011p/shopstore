import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi"
import Order from './Order'


const showOrders = (props) => {
        return (<div>
            <div className='basket__cart'> {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        </div>
    </div>)
}

const showNothing = () => {
    return(<div className='empty'>
        <h2>Корзина пустая</h2>
    </div>)
}

export default function Headerbasket(props) {
    let [cartOpen, setCartOpen] = useState(true)
    let count = 0
    let sum = 0
    props.orders.forEach(el => count += 1)
    props.orders.forEach(el => sum += Number.parseFloat(el.price))

    return (
            <div className='bascets conteiner'>
                <div className='bascets__left'></div>
                <div className='bascets__writh'>
                    <FiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-button ${cartOpen && 'active'}`} />
                    <div className='count'>{count}</div>
                    <div className='sum'>{new Intl.NumberFormat().format(sum)}₸</div>
                    {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                    </div>
                    )}
                </div>
            </div>
    )
}
