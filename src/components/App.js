import React from 'react';

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import {api} from "../utils/Api";


function App() {
    const emptyCard = {name : '', link: ''};
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(emptyCard);

    const [currentUser, setCurrentUser] = React.useState([]);

    React.useEffect(() => {
        api
            .getUserInfoApi()
            .then(userData => {
                setCurrentUser(userData)
            })
            .catch(err => console.log(err))
    }, []);

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
                    />

                    <Footer/>

                    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>


                    <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                                   buttonText="Создать"
                                   children={
                                       <>
                                           <div className="form__section">
                                               <label htmlFor="photo-name" className="form__label"></label>
                                               <input type="text" className="form__item form__item_type_photo-name"
                                                      id="photo-name" name="name"
                                                      placeholder="Название" required minLength="2" maxLength="30"/>
                                               <span className="form__input-error" id="photo-name-error"></span>
                                           </div>
                                           <div className="form__section">
                                               <label htmlFor="link" className="form__label"></label>
                                               <input type="url" className="form__item form__item_type_link" id="link"
                                                      name="link"
                                                      placeholder="Ссылка на картинку" required/>
                                               <span className="form__input-error" id="link-error"></span>
                                           </div>
                                       </>
                                   }/>
                    <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                   buttonText="Сохранить"
                                   children={
                                       <div className="form__section">
                                           <label htmlFor="avatar-link" className="form__label"></label>
                                           <input type="url" className="form__item form__item_type_avatar-link"
                                                  id="avatar-link" name="avatar"
                                                  placeholder="Ссылка на картинку" required/>
                                           <span className="form__input-error" id="avatar-link-error"></span>
                                       </div>
                                   }/>
                </div>
            </div>
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
