import React from 'react';

function PopupWithForm(props) {
    const Popup = document.querySelector(`.popup_type_${props.name}`)





    return (
        <>

            <section className={props.isOpen ? `popup popup_type_${props.name} popup_is-opened` : `popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button className="popup__close page__button" onClick={props.onClose}></button>
                <div className="popup__content">
                    <h2 className="popup__title">{props.title}</h2>
                    <form className="form" name={props.name} noValidate>
                        {props.children}
                        <button type="submit" className="form__save">Сохранить</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}

export default PopupWithForm;

//{props.isOpen ? `popup popup_type_${props.name} popup_is-opened` : `popup popup_type_${props.name}`}
//{props.isClose ? Popup.classList.remove('popup_is-opened'): console.log('gfjhdg')}
//{props.isOpen ? Popup.classList.add('popup_is-opened'): console.log('gfjhdg')}
/*
* if (props.isOpen) {
        Popup.classList.add('popup_is-opened')
    }


    if (props.isClose) {
        Popup.classList.remove('popup_is-opened')
    }
*
* */