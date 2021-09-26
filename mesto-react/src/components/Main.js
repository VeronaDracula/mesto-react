import React from 'react';
import avatar from '../images/Avatar.png';

function Main(props) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-box">
                        <img className="profile__avatar" src={avatar} alt="аватар"/>
                            <div className="profile__avatar-hover">
                                <button className="profile__edit-avatar-button" type="button" onClick={props.onEditAvatar}></button>
                            </div>
                    </div>
                    <div className="profile__text">
                        <div className="profile__name-edit">
                            <h1 className="profile__name"> Жак-Ив Кусто</h1>
                            <button className="profile__edit-button page__button" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__about">Исследователь океана</p>
                    </div>
                </div>
                <button className="profile__add-button page__button" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="gallery">
                <ul className="cards">
                    <template className="card-template">
                        <li className="card">
                            <img className="card__image" alt=" " src=" "/>
                                <div className="card__image-info">
                                    <h2 className="card__title"></h2>
                                    <div className="card__like-box">
                                        <button className="card__like" type="button"></button>
                                        <p className="card__like-amount"></p>
                                    </div>
                                </div>
                        </li>
                    </template>
                    <template className="card-template-with-delete">
                        <li className="card">
                            <button className="card__delete page__button" type="button"></button>
                            <img className="card__image" alt=" " src=" "/>
                                <div className="card__image-info">
                                    <h2 className="card__title"></h2>
                                    <div className="card__like-box">
                                        <button className="card__like" type="button"></button>
                                        <p className="card__like-amount"></p>
                                    </div>
                                </div>
                        </li>
                    </template>
                </ul>
            </section>
        </main>
    );
}

export default Main;