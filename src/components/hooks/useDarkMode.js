import useLocalStorage from "./useLocalStorage"
import {useEffect} from 'react'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', false)
    //state

    useEffect(() => {
        //useEffect selects body and changes it to dark mode
        const myBody = document.querySelector("body");
        if(darkMode) {
            //if darkmode == true then run this if statement
            myBody.classList.add("dark-mode")
        } else {
            myBody.classList.remove("dark-mode")
        }
    },[darkMode])

    
    return [darkMode, setDarkMode]
};


export default useDarkMode