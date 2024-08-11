import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollTop = () => {
    const pathName = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathName])
   
    return null
}
export default ScrollTop;