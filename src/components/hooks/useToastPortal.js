import {useEffect, useState} from "react";
import {uuid} from "../API/UUID";

export const useToastPortal = () => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState(`toast-portal-${uuid()}`)

    useEffect(() => {
        const div = document.createElement('div');
        div.id = portalId;
        div.style = 'position:fixed; top: 10px; right: 10px; z-index:3';
        document.getElementsByTagName('body')[0].prepend(div);

        setLoaded(true);

        return () => document.getElementsByTagName('body')[0].removeChild(div);
    }, [portalId])

    return {loaded,portalId}
}