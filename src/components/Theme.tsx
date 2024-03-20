import { useState } from "react";
export let isDark = false;

const Theme:React.FC = ()=>{
    const [Theme, setTheme] = useState(false);

    if("theme" in localStorage){
        const theme = localStorage['theme'];
        if(theme == 'dark'){
            setTheme(true);
        }
        else{
            setTheme(false);
        }
    }
    else{
        localStorage['theme'] = 'light';
    }

    isDark = Theme;
    return(
        <>
        </>
    )
}
if(isDark){
    const body = document.querySelector("body");
    body!.style.background = "#131722";
}

export default Theme;