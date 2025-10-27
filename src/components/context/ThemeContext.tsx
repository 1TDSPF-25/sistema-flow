import { createContext, useState, type ReactNode } from "react";
import type { ThemeContextType } from "../../types/themeContextType";


//Criando o bilhete mágico
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Criando a pessoa que vai entregar o bilhete mágico para todo mundo.
export const ThemeProvider = ({children} : {children:ReactNode} ) =>{

    //Guardando o estado da Luz
    const [isDark, setIsDark] = useState(false);

    //Função para mudar o estado da Luz
    const toggleTheme = ()=>{
        setIsDark(( prevIsDark )=> !prevIsDark);
    }

    return(
        <ThemeContext.Provider value={{isDark, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    );

};