import React from 'react';
import SpellCard from "./SpellCard";
import LoadedImage from "../news/LoadedImage";

const HeroCard = (props) => {


    return (
        <>
        <div onClick = {e => { return props.onClick(e)}} className='hero-wrapper'>
            <div className="hero-card">
                <LoadedImage classname = 'hero-card__image' img = {props.hero}/>
            </div>
            <h1 className = "hero-title hero-wrapper__hero-title">{props.name}</h1>
            <h2 className = "hero-wrapper__hero-country">{props.country}</h2>
            <div className="spell-board">
                {props.spells.map((spell,id)=>
                    <img className='spell spell-board__spell' src={spell} key ={id} alt='hero-spell'/>
                )}
            </div>
        </div>
        <div className = 'spellinfo-bar'>
            <SpellCard spell={props.spells[0]}
                       id={1}
                       name = {'spell name'}
                       type = {'BASIC'}
                       info = {'Info about this ability'}/>
            <SpellCard spell={props.spells[2]}
                       id={2}
                       name = {'spell name'}
                       type = {'SIGNATURE'}
                       info = {'Info about this ability'}/>
            <SpellCard spell={props.spells[3]}
                       id={3}
                       name = {'spell name'}
                       type = {'ULTIMATE'}
                       info = {'Info about this ability'}/>
        </div>
        </>
    );
};

export default HeroCard;