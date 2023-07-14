import {useEffect,useState,useRef} from "react";


export const useLoadImage = (classname) => {
    const imageRef = useRef()
    const [isLoaded,setLoaded] = useState(false)
    const [classes,setClasses] = useState([classname])

    useEffect(() => {
        if(imageRef){
            imageRef.current.onload = () =>{
                setLoaded(true)
            }
        }
    },[])

    useEffect(() => {
        setClasses([classname,`${classname}--loaded`])
    },[isLoaded])


    return {imageRef,classes}
}