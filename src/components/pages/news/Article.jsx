import React from 'react';

const Article = (props) => {
    return (
        <div onClick = {(e) => {e.stopPropagation();return props.onClick(true,props.name,props.img)}}
             className="news__article">
            <h1 className = "article-title news__article-title">{props.name}</h1>
            <img className="news__image" src = {props.img} alt = "article-picture"/>
        </div>
    );
};

export default Article;