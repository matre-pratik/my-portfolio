import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { StarBackground } from "./StarBackground";

export const ThemeToggle = () => {
  const [isDarkMOde, setIsDarkMOde] = useState(false);

  useEffect ( () =>{
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme === "dark"){
        setIsDarkMOde(true);
        document.documentElement.classList.add("dark");
    }else{
        localStorage.setItem("theme" , "light");
        setIsDarkMOde(false);
    }

  }, [])

  const toggleTheme = () =>{
    if(isDarkMOde){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme" , "light");
        setIsDarkMOde(false);
    }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
        setIsDarkMOde(true);
    }
  }

  return (
    <div>
      <button onClick={toggleTheme} className={cn("fixed  md:py-0 top-5 right-5 z-50 rounded-full cursor-pointer transition-colors duration-300", "focus:outline-hidden")}>
        {isDarkMOde ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>

       {/* Background Effect  */}
      {isDarkMOde && <StarBackground/>}
    </div>
  );
};
