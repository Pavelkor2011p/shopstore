import React from "react"
import Categories from "./components/Categories"
import Header from "./components/Header"
import admin from "./components/admin"
import Main from "./components/Main"
import Headerbasket from "./components/Headerdbasket"
import Footer from "./components/Footer"
import ShowFullItem from "./components/ShowFullItem"
import { ButtonCase } from "./components/ButtonCase"
import { Route, Routes,} from "react-router-dom"
import {Items01} from "./components/Items01"
import {Items02} from "./components/Items02"
import {Items03} from "./components/Items03"

const items = admin
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: items,
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.chooseBrend = this.chooseBrend.bind(this)
    this.choosePrice = this.choosePrice.bind(this)
  }
  render(){
  return (
    <React.StrictMode>
      <div className="wrapp">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Headerbasket orders={this.state.orders} onDelete={this.deleteOrder} />
        <Main />
        <Categories chooseCategory={this.chooseCategory} chooseBrend={this.chooseBrend} choosePrice={this.choosePrice} />
              <Routes>
                <Route  path='/' element={<Items01 onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />} />
                <Route  path='items01' element={<Items02 onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />} />
                <Route  path='items02' element={<Items03 onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />} />
              </Routes>
            {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <ButtonCase />
        <Footer />
      </div>
    </React.StrictMode>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ showFullItem: !this.state.showFullItem})
  }

  chooseBrend(brend){
    if(brend === 'All') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.brend === brend)
    })
  }

  choosePrice(price01, price02, brend) {
    if(brend === '') {brend = 'Nivea'}
    this.setState({
      currentItems: this.state.items.filter(el => +el.price >= price01 && +el.price <= price02 && el.brend === brend)
    })
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  
  addToOrder(item) {
    let isArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isArray = true
    })
    if(!isArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
