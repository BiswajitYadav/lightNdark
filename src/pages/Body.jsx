import React from 'react'
import { useState , useEffect } from 'react'

const Body = () => {
    const localTheme = localStorage.getItem("theme")
    const [ theme , setTheme ] = useState(localTheme);

    useEffect(()=>{
        if(theme==="dark"){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark" );
    }

  return (
    <>
        <div className='h-screen dark:bg-black flex justify-center items-center'>
            <button className='bg-black shadow-black shadow-lg text-xl dark:hidden text-white border-2 border-black px-6 py-2 rounded-full font-bold' onClick={handleThemeSwitch}>Dark Mode</button>
            <button className='bg-white text-xl hidden dark:block text-black border-2 border-white shadow-white shadow-lg px-6 py-2 rounded-full font-bold' onClick={handleThemeSwitch}>Light Mode</button>
        </div>
    </>
  )
}

export default Body