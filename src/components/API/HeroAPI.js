export const changeHero = (e,ref) =>{
    if(e.target.closest('.hero-wrapper') != ref.current) {
        if(ref.current !== undefined) {
            ref.current.nextElementSibling.classList.remove('spellinfo-bar--active');
            ref.current.querySelector('.hero-card').classList.remove('hero-card--active');
            ref.current.querySelector('.spell-board').classList.remove('spell-board--active');
            ref.current.querySelector('.hero-title').classList.remove('hero-title--active');
            ref.current.querySelectorAll('.spell-board__spell').forEach( elem => elem.classList.add('spell--active'));
        }
        ref.current = e.target.closest('.hero-wrapper');
        ref.current.nextElementSibling.classList.add('spellinfo-bar--active');
        ref.current.querySelector('.hero-card').classList.add('hero-card--active');
        ref.current.querySelector('.spell-board').classList.add('spell-board--active');
        ref.current.querySelector('.hero-title').classList.add('hero-title--active');
        ref.current.querySelectorAll('.spell-board__spell').forEach( elem => elem.classList.add('spell--active'));
    }
}

