import React from 'react';
import {api} from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getUserInfoApi()
            .then(userData => {
                //загрузка данных пользователя на страницу
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar)
            })
            .catch(err => console.log(err))


    }, []);

    React.useEffect(() => {
        api
            .getCards()
            .then(cardsData => {
                setCards(cardsData)
            })
            .catch(err => console.log(err))

    }, []);




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
                    {cards.map((card) => <Card card={card}
                                               name={card.name}
                                               link={card.link}
                                               linkes={card.likes.length}
                                               id={card._id}
                                               onCardClick={props.onCardClick}/>
                                               )}
                </ul>
            </section>
        </main>
    );
}

export default Main;