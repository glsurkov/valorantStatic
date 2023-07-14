import React, {useRef, Suspense, useEffect, useState} from 'react';
import heroesUUIDS from "./heroList";
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