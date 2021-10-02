import React from 'react';


function Card(props) {


    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card">
            <button className="card__delete page__button" type="button"></button>
            <img className="card__image" alt={props.name} src={props.link} onClick={handleClick}/>
            <div className="card__image-info">
                <h2 className="card__title">{props.name}</h2>
                <div className="card__like-box">
                    <button className="card__like" type="button"></button>
                    <p className="card__like-amount">{props.likes}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;