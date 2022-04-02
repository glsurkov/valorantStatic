import React from 'react';

const SpellCard = (props) => {
    return (
        <div className = "spell-card spellinfo-bar__spell-card">
            <div className = "spell__description">
                <h1 className = "spell-card__type">{props.type}</h1>
                <h2 className = "spell-card__name">{props.name}</h2>
                <p className="spell-card__info">{props.info}</p>
            </div>
            <img className='spell spell-card__spell' src={props.spell} key ={props.id} alt='hero-spell'/>
        </div>
    );
};

export default SpellCard;