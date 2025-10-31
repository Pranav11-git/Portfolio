import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

export const ThemeToggle = ()=>{
    //if we are light mode it should show sun icon and if we are in dark we want to show the moon icon so we will use state
    const [isDarkMode,setIsDarkMode] = useState(false)

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
            setIsDarkMode(false)
        }
    },[])

    const toggleTheme = ()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            setIsDarkMode(true)
        }
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2",
                    "rounded-full transition-colors duration-300 focus:outline-hidden"

    )}>
        {isDarkMode ?
         <Sun className="h-6 w-6 text-yellow-300 cursor-pointer"/> :
          <Moon className="h-6 w-6 text-blue-900 cursor-pointer"/>
          }
          </button>
}