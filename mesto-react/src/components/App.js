import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
        <div className="page">
            <div className="page__content">
                <Header/>
                <Main/>
                <section className="popup popup_type_profile">
                    <div className="popup__container">
                        <button className="popup__close page__button"></button>
                        <div className="popup__content">
                            <h2 className="popup__title">Редактировать профиль</h2>
                            <form className="form" name="data" noValidate>
                                <div className="form__section">
                                    <label htmlFor="name" className="form__label"></label>
                                    <input type="text" className="form__item form__item_type_name" id="name" name="name"
                                           placeholder="Имя"
                                           required minLength="2" maxLength="40"/>
                                        <span className="form__input-error" id="name-error"></span>
                                </div>
                                <div className="form__section">
                                    <label htmlFor="about" className="form__label"></label>
                                    <input type="text" className="form__item form__item_type_about" id="about"
                                           name="about" placeholder="О себе"
                                           required minLength="2" maxLength="200"/>
                                        <span className="form__input-error" id="about-error"></span>
                                </div>
                                <button type="submit" className="form__save ">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="popup popup_type_card">
                    <div className="popup__container">
                        <button className="popup__close page__button"></button>
                        <div className="popup__content">
                            <h2 className="popup__title">Новое место</h2>
                            <form className="form" name="data" noValidate>
                                <div className="form__section">
                                    <label htmlFor="photo-name" className="form__label"></label>
                                    <input type="text" className="form__item form__item_type_photo-name" id="photo-name"
                                           name="name"
                                           placeholder="Название" required minLength="2" maxLength="30"/>
                                        <span className="form__input-error" id="photo-name-error"></span>
                                </div>
                                <div className="form__section">
                                    <label htmlFor="link" className="form__label"></label>
                                    <input type="url" className="form__item form__item_type_link" id="link" name="link"
                                           placeholder="Ссылка на картинку" required/>
                                        <span className="form__input-error" id="link-error"></span>
                                </div>
                                <button type="submit" className="form__save">Создать</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="popup popup_type_photo">
                    <div className="popup-photo">
                        <button className="popup__close page__button"></button>
                        <figure className="popup-photo__image-container">
                            <img className="popup-photo__image" alt=" " src=" "/>
                                <figcaption className="popup-photo__title"></figcaption>
                        </figure>
                    </div>
                </section>

                <section className="popup popup_type_delete">
                    <div className="popup__container">
                        <button className="popup__close page__button"></button>
                        <div className="popup__content">
                            <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
                            <form className="form" name="data" noValidate>
                                <button type="submit" className="form__save form__save_type_delete">Да</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="popup popup_type_edit-avatar">
                    <div className="popup__container">
                        <button className="popup__close page__button"></button>
                        <div className="popup__content">
                            <h2 className="popup__title popup__title_type_edit-avatar">Обновить аватар</h2>
                            <form className="form" name="data" noValidate>
                                <div className="form__section">
                                    <label htmlFor="avatar-link" className="form__label"></label>
                                    <input type="url" className="form__item form__item_type_avatar-link"
                                           id="avatar-link" name="avatar"
                                           placeholder="Ссылка на картинку" required/>
                                        <span className="form__input-error" id="avatar-link-error"></span>
                                </div>
                                <button type="submit" className="form__save">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    </div>
  );
}

export default App;
