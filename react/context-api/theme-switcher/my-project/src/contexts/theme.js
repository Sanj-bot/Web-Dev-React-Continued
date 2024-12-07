import { createContext,useContext } from "react";

export const ThemeContext=createContext(
{
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
}
);


export const ThemeProvider=ThemeContext.Provider;


// returns useContext(ThemeContext)
export default function useTheme(){
    return useContext(ThemeContext)
}

