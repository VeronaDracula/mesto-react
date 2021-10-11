import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    const nameCardRef = React.useRef();
    const linkCardImageRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: nameCardRef.current.value,
            link: linkCardImageRef.current.value
        });

        nameCardRef.current.value = '';
        linkCardImageRef.current.value = '';
    }


    return (
        <PopupWithForm name="card" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
                       buttonText={props.buttonText} buttonDisable={props.buttonDisable}
                       children={
                           <>
                               <div className="form__section">
                                   <label htmlFor="photo-name" className="form__label"></label>
                                   <input type="text" className="form__item form__item_type_photo-name"
                                          id="photo-name" name="name" placeholder="Название" required minLength="2"
                                          maxLength="30" defaultValue='' ref={nameCardRef}/>
                                   <span className="form__input-error" id="photo-name-error"></span>
                               </div>
                               <div className="form__section">
                                   <label htmlFor="link" className="form__label"></label>
                                   <input type="url" className="form__item form__item_type_link" id="link"
                                          name="link" placeholder="Ссылка на картинку" required
                                          defaultValue='' ref={linkCardImageRef}/>
                                   <span className="form__input-error" id="link-error"></span>
                               </div>
                           </>
                       }/>
    );
}

export default AddPlacePopup;