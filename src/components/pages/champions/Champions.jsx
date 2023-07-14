import React, {useRef, Suspense, useEffect, useState} from 'react';
import heroesUUIDS from "./heroList";
import phoenix from '../../../images/heroes/phoenix.png'
import jett from '../../../images/heroes/jett.png'
import sova from '../../../images/heroes/sova.png'
import sage from '../../../images/heroes/sage.png'
import phoenix_first from '../../../images/heroes/phoenix-spells/first.svg'
import phoenix_second from '../../../images/heroes/phoenix-spells/second.svg'
import phoenix_third from '../../../images/heroes/phoenix-spells/third.svg'
import phoenix_fourth from '../../../images/heroes/phoenix-spells/fourth.svg'
import jett_first from '../../../images/heroes/jett-spells/first.svg'
import jett_second from '../../../images/heroes/jett-spells/second.svg'
import jett_third from '../../../images/heroes/jett-spells/third.svg'
import jett_fourth from '../../../images/heroes/jett-spells/fourth.svg'
import sova_first from '../../../images/heroes/sova-spells/first.svg'
import sova_second from '../../../images/heroes/sova-spells/second.svg'
import sova_third from '../../../images/heroes/sova-spells/third.svg'
import sova_fourth from '../../../images/heroes/sova-spells/fourth.svg'
import sage_first from '../../../images/heroes/sage-spells/first.svg'
import sage_second from '../../../images/heroes/sage-spells/second.svg'
import sage_third from '../../../images/heroes/sage-spells/third.svg'
import sage_fourth from '../../../images/heroes/sage-spells/fourth.svg'
import {changeHero} from "../../API/HeroAPI";
import axios from "axios";

const Champions = () => {


    const [heroes,setHeroes] = useState([])
    const elemRef = useRef();

    function activeHero(){
        return changeHero(...arguments,elemRef)
    }

    const HeroCard = React.lazy(() => import('./HeroCard'))

    async function fetchHeroes(){
        const fetchedHeroes = []
        try {
            for(let i=0; i < heroesUUIDS.length; i++){
                const hero = await axios.get(`https://valorant-api.com/v1/agents/${heroesUUIDS[i]}`)
                fetchedHeroes.push(hero.data)
            }
            setHeroes(fetchedHeroes)
            console.log(fetchedHeroes)
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchHeroes()
    }, [])

    return (
        <main className = "main">
            <Suspense fallback={<div className='loader'></div>}>
            <div className='main__wrapper'>
                <h2 className="hero-title main__hero-title">AGENTS</h2>
            <div className="main__container">
                {
                    heroes.map((el) => {
                        return <HeroCard onClick = {activeHero}
                                  hero = {el.data.fullPortrait}
                                  name = {el.data.displayName}
                                  spells={el.data.abilities.filter((el, i) => i !== 4)}/>
                    })
                }
                {/*<HeroCard onClick = {activeHero}*/}
                {/*          hero = {hero}*/}
                {/*          name = {'phoenix'}*/}
                {/*          country = {'United Kingdom'}*/}
                {/*          spells={[phoenix_first,phoenix_second,phoenix_third,phoenix_fourth]}/>*/}
                {/*<HeroCard onClick = {activeHero}*/}
                {/*          hero = {jett}*/}
                {/*          name = {'jett'}*/}
                {/*          country = {'South Korea'}*/}
                {/*          spells={[jett_first,jett_second,jett_third,jett_fourth]}/>*/}
                {/*<HeroCard onClick = {activeHero}*/}
                {/*          hero = {sova}*/}
                {/*          name = {'sova'}*/}
                {/*          country = {'Russia'}*/}
                {/*          spells={[sova_first,sova_second,sova_third,sova_fourth]}/>*/}
                {/*<HeroCard onClick = {activeHero}*/}
                {/*          hero = {sage}*/}
                {/*          name = {'sage'}*/}
                {/*          country = {'China'}*/}
                {/*          spells={[sage_first,sage_second,sage_third,sage_fourth]}/>*/}
            </div>
            </div>
            </Suspense>
        </main>
    );
};

export default Champions;