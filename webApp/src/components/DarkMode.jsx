import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement;

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if(theme === "dark"){
            element.classList.add("dark");
        } else{
            element.classList.remove("dark");
        }
    });

    return (
        <div className="relative">
            <FaMoon onClick={() => setTheme(theme === "dark" ? "light":"dark")} className={`text-2xl w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0":"opacity-100"} transition-all duration-300`} />
            <FaSun onClick={() => setTheme(theme === "light" ? "dark":"light")} className={`text-2xl w-12 cursor-pointer absolute right-0 z-10 ${theme === "light" ? "opacity-0":"opacity-100"} transition-all duration-300`} />
        </div>
    )
}

export default DarkMode