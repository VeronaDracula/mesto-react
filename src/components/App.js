import React from 'react';

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import AddPlacePopup from './AddPlacePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from './ImagePopup.js';
import {api} from "../utils/Api";


function App() {
    const emptyCard = {name : '', link: ''};
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(emptyCard);
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState([]);

    //получение данных пользователя
    React.useEffect(() => {
        api
            .getUserInfoApi()
            .then(userData => {
                setCurrentUser(userData)
            })
            .catch(err => console.log(err))
    }, []);

    //открытие и закрытие попапов
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(emptyCard)
    }

    //обновление данных пользователя
    function handleUpdateUser(newUserData) {
        api
            .createNewUserInfoApi(newUserData)
            .then(newUserData => {
                setCurrentUser(newUserData);
                closeAllPopups();
            })
            .catch(err => console.log(err))
    }

    //обновление аватара пользователя
    function handleUpdateAvatar(newUserAvatar) {
        api
            .createNewUserAvatarApi(newUserAvatar)
            .then(newUserAvatar => {
                setCurrentUser(newUserAvatar);
                closeAllPopups();
            })
            .catch(err => console.log(err))
    }

    //добавление новой карточки
    function handleAddPlaceSubmit(newCard) {
        api
            .createCardApi(newCard)
            .then(newCard => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch(err => console.log(err))
    }

    //запрос данных карточки
    React.useEffect(() => {
        api
            .getCards()
            .then(cardsData => {
                setCards(cardsData)
            })
            .catch(err => console.log(err))

    }, []);

    //лайки и дизлайки
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        if (!isLiked) {
            api
                .likeApi(card._id,)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch(err => console.log(err))
        }

        else {
            api
                .deleteLikedApi(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch(err => console.log(err))
        }
    }

    //удаление карточки
    function handleCardDelete(card) {
        api
            .deleteCardApi(card._id)
            .then(() => {
                setCards((state) => state.filter(cardData => card._id !== cardData._id))
            })
            .catch(err => console.log(err))

    }




  return (
    <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__content">
                    <Header/>

                    <Main onEditProfile={handleEditProfileClick}
                          onAddPlace={handleAddPlaceClick}
                          onEditAvatar={handleEditAvatarClick}
                          onCardClick={handleCardClick}
                          cards={cards}
                          onCardLike={handleCardLike}
                          onCardDelete={handleCardDelete}
                    />

                    <Footer/>

                    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

                </div>
            </div>
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
