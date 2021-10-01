import React from 'react';
import avatar from '../images/Avatar.png';
import {api} from '../utils/Api.js';

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    React.useEffect(() => {
        api
            .getUserInfoApi()
            .then(userData => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar)
                //загрузка данных пользователя на страницу
            })
            .catch(err => console.log(err))

    });



    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-box" >

                        <img className="profile__avatar" alt="аватар"  src={userAvatar}/>

                            <div className="profile__avatar-hover">
                                <button className="profile__edit-avatar-button" type="button" onClick={props.onEditAvatar}></button>
                            </div>
                    </div>
                    <div className="profile__text">
                        <div className="profile__name-edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button page__button" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__about">{userDescription}</p>
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