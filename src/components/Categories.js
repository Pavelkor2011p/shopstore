import React, { Component } from 'react'


export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'уход за телом',
                    name: 'Уход',
                    serName: 'за телом'
                },
                {
                    key: 'уход за руками',
                    name: 'Уход',
                    serName: 'за руками'
                },
                {
                    key: 'уход за ногами',
                    name: 'Уход',
                    serName: 'за ногами'
                },
                {
                    key: 'уход за лицом',
                    name: 'Уход',
                    serName: 'за лицом'
                },
                {
                    key: 'уход за волосами',
                    name: 'Уход',
                    serName: 'за волосами'
                },
                {
                    key: 'Средства для загара',
                    name: 'Средства для загара'
                },
                {
                    key: 'Средства для бритья',
                    name: 'Средства для бритья'
                },
                {
                    key: 'Подарочные наборы',
                    name: 'Подарочные наборы'
                },
                {
                    key: 'Гигиеническая продукция',
                    name: 'Гигиеническая продукция'
                },
                {
                    key: 'Гигиена полости рта',
                    name: 'Гигиена полости рта'
                },
                {
                    key: 'all',
                    name: 'Все'
                },
            ],
            brend: [
                {
                    key: 'Nivea',
                    name: 'Nivea'
                },
                {
                    key: 'Arco',
                    name: 'Arco'
                },
                {
                    key: 'Paclan',
                    name: 'Paclan'
                },
                {
                    key: 'Geco',
                    name: 'Geco'
                },
                {
                    key: 'All',
                    name: 'Все',
                }
            ]
        }
    }
    render() {
    return (
        <div className='conteiner'>
    <div className='categories'>
        {this.state.categories.map(el => (
            <div className='categories__top' key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name}<br/>{el.serName}</div>
        ))}
        <div className='categories__wrap-rigth'>
            <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
            <div >
                <p><input type="number" placeholder="0" id='price01' className="main__prodact-sidebar_input" required></input>-
                <input type="number" placeholder="10 000" className="main__prodact-sidebar_input" id='price02' required ></input></p>
                <h3>Производитель</h3>
                <div className="header__secondline-input main__prodact-sidebar_search">
                    <input type="search" placeholder="Поиск..." className="header__secondline-input_search" id='search' list='brends' required/>
                    <datalist id='brends'>
                        <option>Nivea</option>
                        <option>Arco</option>
                        <option>Paclan</option>
                        <option>Geco</option>
                    </datalist>
                    <button type="submit" className="header__secondline-input_button" onClick={() => {
                        this.props.choosePrice(document.getElementById('price01').value, document.getElementById('price02').value, document.getElementById('search').value)
                        document.getElementById('price01').value = '';
                        document.getElementById('price02').value = '';
                        document.getElementById('search').value = '';
                    }} />
                </div>
                <div className="main__prodact-sidebar_checkbox">
                {this.state.brend.map(el => (
                    <div>
                    <input type="checkbox" id={el.key} name={el.name} key={el.key} value={el.key} onClick={() => {
                        if(document.getElementById(`${el.key}`).checked) {
                            this.props.chooseBrend(el.key)
                    } else { this.props.chooseBrend('All')}
                    }}/> 
                    <label> {el.name}</label>
                    </div>
                ))}
                </div>
            </div>

            {this.state.categories.map(el => {
                if(el.key === 'уход за телом')
            return <div className='categories__right01'>
                <div key={el.key}  onClick={() => this.props.chooseCategory(el.key)}>{el.name} {el.serName}</div>
                <ul>
                    <li>Эпиляция и депиляция</li>
                    <li>Средства для ванны и душа</li>
                    <li>Скрабы, пилинги и пр.</li>
                    <li>Мочалки и губки для тела</li>
                    <li>Кремы, лосьоны, масла</li>
                    <li>Интимный уход</li>
                    <li>Дезодоранты, антиперспиранты</li>
                    <li>Гели для душа</li>
                </ul>
            </div>
            })}
            {this.state.categories.map(el => {
                if(el.key === 'уход за руками')
                return <div className='categories__right02'>
                    <div key={el.key}  onClick={() => this.props.chooseCategory(el.key)}>{el.name} {el.serName}</div>
                    <ul>
                        <li>Увлажнение и питание</li>
                        <li>Средства для ногтей</li>
                        <li>Мыло твердое</li>
                        <li>Мыло жидкое</li>
                        <li>Крем для рук</li>
                        <li>Защита рук</li>
                        <li>Жидкость для снятия лака</li>
                    </ul>
                </div>
                })}
            {this.state.categories.map(el => {
                if(el.key === 'уход за ногами')
            return <div className='categories__right03'>
            <div key={el.key}  onClick={() => this.props.chooseCategory(el.key)}>{el.name} {el.serName}</div>
            <ul>
                <li>Скрабы, пилинги</li>
                <li>Пилки, ролики</li>
                <li>Крем для ног</li>
                <li>Дезодоранты для ног</li>
            </ul>
            </div>
            })}
            {this.state.categories.map(el => {
                if(el.key === 'уход за лицом')
            return <div className='categories__right04'>
            <div key={el.key}  onClick={() => this.props.chooseCategory(el.key)}>{el.name} {el.serName}</div>
            <ul>
                <li>Тональные средства</li>
                <li>Средства для снятия макияжа</li>
                <li>Средства для очищения</li>
                <li>Маски, скрабы, сыворотки</li>
                <li>Крем для лица</li>
                <li>Крем для век</li>
                <li>Жидкость для снятия макияжа</li>
                <li>Гигиеническая помада</li>
            </ul>
            </div>
            })}
            </div>
    </div>
    </div>
        )
    }
}

export default Categories
