import React from 'react';

function ImagePopup() {
    return (
        <section className="popup popup_type_photo">
            <div className="popup-photo">
                <button className="popup__close page__button"></button>
                <figure className="popup-photo__image-container">
                    <img className="popup-photo__image" alt=" " src=" "/>
                    <figcaption className="popup-photo__title"></figcaption>
                </figure>
            </div>
        </section>
    );
}

export default ImagePopup;