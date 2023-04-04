import React from 'react'

export default function Header() {
    return (
    <header className="header">
    <div className="header__firstline  conteiner">
        <div className="header__firstline-left">
            <div className='header__firstline-left_logo'></div>
            <p className="header__firstline-left_adress"><strong>г. Кокчетав, ул. Ж. Ташенова 129Б</strong><br /><span className="header__firstline-left_west">(Рынок Восточный)</span></p>
            <div className="header__firstline-left">
                <div className='header__firstline-left_email'></div>
                <p className="header__firstline-left_adress"><strong>opt.sultan@mail.ru</strong><br />
                <span className="header__firstline-left_west">На связи в любое время</span></p>
            </div>
        </div>
    <div className="header__firstline-right">
        <nav >
        <ul className="header__firstline-nav">
            <li><a href="/">О компании</a></li>
            <li><a href="/">Доставка и оплата</a></li>
            <li><a href="/">Возврат</a></li>
            <li><a href="/">Контакты</a></li>
            </ul>
        </nav>
    </div>
    </div>
    <div className="header__wrapp">
    <div className="conteiner header__secondline">
        <div className="header__secondline-logo"></div>
        <button className="header__secondline-button button">Каталог  <div className='catalog'></div></button>
            <div className="header__secondline-input">
                <input type="search" placeholder="Поиск..." className="header__secondline-input_search" />
                <input type="button" className="header__secondline-input_button" />
            </div>
        <div className="header__secondline-fone">
            <p><strong>+7 (777) 490-00-91</strong></p>
            <p><span className="header__secondline-fone_west">время работы: 9:00-20:00</span></p><br />
            <a href="tel:+7 (777) 490-00-91" className="header__secondline_tel">Заказать звонок</a>
        </div>
        <div className="header__secondline-img"></div>
        <button className="header__secondline-button button">Прайс-лист <div className='download'></div></button>
        <div className="header__secondline-basket">
            <button className="header__secondline-basket_button"></button>
            <div>
                <p>Корзина</p>
            </div>
        </div>
    </div>
    </div>
</header>
    )
}
