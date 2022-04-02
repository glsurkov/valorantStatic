import React from 'react';

const MainArticle = (props) => {
    return (
        <>
        <h1 className = 'article-title main-article__article-title article-title--black' >{props.article}</h1>
        <div className='main-article'>
            <p className ="main-article__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci distinctio dolor fuga fugiat incidunt, ipsum labore minima mollitia nobis non nulla officia optio pariatur repellat reprehenderit tempore veritatis, voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur minus odit optio perspiciatis sunt vitae! A beatae consequatur dicta, dignissimos error, fugiat, libero praesentium quo recusandae suscipit voluptatibus voluptatum?
            </p>
            <img className = "main-article__image" src = {props.img} alt="article-img"/>
        </div>
        </>
    );
};

export default MainArticle;