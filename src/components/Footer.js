import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__items conteiner'>
        <div className='footer__items-logo'>
          <div className="footer__items-logo_white"></div>
          <p className='footer__items-logo_comp'>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
          <p className='footer__items-logo_action'>Подпишись на скидки и акции</p>
          <div className="header__secondline-input footer__items-logo_input">
            <input type="search" placeholder="Введите ваш E-mail" className="header__secondline-input_search" />
            <input type="button" className="header__secondline-input_button header__secondline-input_button01" />
          </div>
        </div>
        <div className='footer__items-menu'>
          <h3>Меню сайта:</h3>
          <ul>
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Возврат</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className='footer__items-category'>
        <h3>Категории:</h3>
          <ul>
            <li>Бытовая химия</li>
            <li>Косметика и гигиена</li>
            <li>Товары для дома</li>
            <li>Товары для детей и мам</li>
            <li>Посуда</li>
          </ul>
        </div>
        <div className='footer__items-price'>
          <h3>Скачать прайс-лист:</h3>
          <button className="header__secondline-button button">Прайс-лист <div className='download'></div></button>
          <p>Связь в мессенджерах:</p>
            <div className='footer__items-price_mess'>
              <div className='footer__items-price_wa'></div>
              <div className='footer__items-price_tg'></div>
            </div>
        </div>
        <div className='footer__items-contacts'>
          <h3>Контакты:</h3>
          <p>+7 (777) 490-00-91</p>
          <p>время работы: 9:00-20:00<br></br>Заказать звонок</p>
          <p>opt.sultan@mail.ru 
          На связи в любое время</p>
          <div className='footer__items-contacts_card'>
            <div className='footer__items-contacts_visa'></div>
            <div className='footer__items-contacts_mastercard'></div>
          </div>
        </div>

      </div>
    </footer>
  )
}
