import React, {useEffect, useRef, useState} from 'react';

const LoadedImage = (props) => {

    const imageRef = useRef()
    const [isLoaded,setLoaded] = useState(false)
    const [classes,setClasses] = useState([props.classname])

    console.log('Рендер картинок')

    useEffect(() => {
        if(imageRef){
            imageRef.current.onload = () =>{
                setLoaded(true)
            }
        }
    },[])

    useEffect(() => {
            setClasses([props.classname,`${props.classname}--loaded`])
    },[isLoaded])

    return (
        <div className="image-container">
            <img ref = {imageRef} className={classes.join(' ')} src = {props.img} alt = "article-picture"/>
        </div>
    );
};

export default LoadedImage;