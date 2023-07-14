import React/*, {useEffect, useRef, useState}*/ from 'react';
import {useLoadImage} from "../../hooks/useLoadImage";

const LoadedImage = (props) => {

    const {imageRef,classes} = useLoadImage(props.classname)

    return (
        <div className="image-container">
            <img ref = {imageRef} className={classes.join(' ')} src = {props.img} alt = "article-picture"/>
        </div>
    );
};

export default LoadedImage;