

export function ThemeProvider({children}){
    const[theme, setTheme] =useState("light");

    const toggleTheme=()=>{
        setTheme(prev=>prev==="light"?)
    };
}