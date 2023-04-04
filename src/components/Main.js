import React, { Component } from 'react'

export class Main extends Component {
    render (){
    return (
    <main className="main conteiner">
        <div className="main__content">
            <a href="/" className="main__content-home">Главная</a>
            <p className="main__content-cosm">Косметика и гигиена</p>
        </div>
        <div className="main__top">
            <h1 className="main__top-title">Косметика и гигиена</h1>
            <p className="main__top-select">Сортировка:  <select>
            <option>Название</option>
            <optgroup label="Цена">
                <option value="">По возрастанию</option>
                <option value="">По убыванию</option>
            </optgroup>
            </select></p>
        </div>
        </main>
    )
    }
}
export default Main