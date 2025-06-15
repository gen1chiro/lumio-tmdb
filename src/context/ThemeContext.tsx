import { createContext, useContext, useState, ReactNode } from "react"
import type { ThemeContextType } from "../types/types.ts"

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const storedTheme = localStorage.getItem("isDarkMode")
        return storedTheme ? JSON.parse(storedTheme) : false
    })

    const toggleTheme = () => {
        setIsDarkMode((prevState) => {
            const newTheme = !prevState
            localStorage.setItem("isDarkMode", JSON.stringify(newTheme))
            return newTheme
        })
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <div className={`${isDarkMode ? "dark" : ""} transition-colors ease-in duration-300`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}