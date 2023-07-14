import React from 'react';
import SpellCard from "./SpellCard";
import LoadedImage from "../news/LoadedImage";

const HeroCard = ({spells,hero,name,onClick}) => {


    return (
        <>
        <div onClick = {e => { return onClick(e)}} className='hero-wrapper'>
            <div className="hero-card">
                <LoadedImage classname = 'hero-card__image' img = {hero}/>
            </div>
            <h1 className = "hero-title hero-wrapper__hero-title">{name}</h1>
            <div className="spell-board">
                {spells.map((spell)=>
                    <img className='spell spell-board__spell' src={spell.displayIcon} key ={spell.slot} alt='hero-spell'/>
                )}
            </div>
        </div>
        <div className = 'spellinfo-bar'>
            <SpellCard spell={spells[0].displayIcon}
                       id={1}
                       name = {'spell name'}
                       type = {'BASIC'}
                       info = {'Info about this ability'}/>
            <SpellCard spell={spells[2].displayIcon}
                       id={2}
                       name = {'spell name'}
                       type = {'SIGNATURE'}
                       info = {'Info about this ability'}/>
            <SpellCard spell={spells[3].displayIcon}
                       id={3}
                       name = {'spell name'}
                       type = {'ULTIMATE'}
                       info = {'Info about this ability'}/>
        </div>
        </>
    );
};

export default HeroCard;