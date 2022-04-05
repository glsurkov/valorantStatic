import React from 'react';
import LoadedImage from "./LoadedImage";

const Article = (props) => {
    return (
        <div onClick = {(e) => {e.stopPropagation();return props.onClick(true,props.name,props.img)}}
             className="news__article">
            <h1 className = "article-title news__article-title">{props.name}</h1>
            <LoadedImage classname="news__image" img = {props.img}/>
        </div>
    );
};

export default Article;