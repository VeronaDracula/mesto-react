import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
    const emptyCard = {name : '', link: ''};
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(emptyCard);

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


  return (
    <div className="App">
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


                <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                               buttonText="Сохранить"
                               children={
                                   <>
                                       <div className="form__section">
                                           <label htmlFor="name" className="form__label"></label>
                                           <input type="text" className="form__item form__item_type_name" id="name"
                                                  name="name" placeholder="Имя"
                                                  required minLength="2" maxLength="40"/>
                                           <span className="form__input-error" id="name-error"></span>
                                       </div>
                                       <div className="form__section">
                                           <label htmlFor="about" className="form__label"></label>
                                           <input type="text" className="form__item form__item_type_about" id="about" name="about" placeholder="О себе"
                                                  required minLength="2" maxLength="200"/>
                                           <span className="form__input-error" id="about-error"></span>
                                       </div>
                                   </>
                               }/>
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
    </div>
  );
}

export default App;
