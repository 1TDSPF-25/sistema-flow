import { useContext } from "react"
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {

    const context = useContext(ThemeContext);

    if(context === undefined) {
        throw new Error("O useTheme deve ser usado dentro de um ThemeProvider");
    }

    return context;
}