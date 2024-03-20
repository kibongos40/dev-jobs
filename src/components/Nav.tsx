import styles from "./styles/Nav.module.css";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import logo from "../assets/desktop/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export let isDark = false;

const Nav: React.FC = () => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark';
    });

    const handleChangeTheme = () => {
        const newTheme = !theme;
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        setTheme(newTheme);
        window.location.reload();
    };
    isDark = theme;
    if(isDark){
        const body = document.querySelector("body");
        body!.style.background = "#131722";
    }
    return (
        <div className={styles.nav}>
            <div className={styles.header}>
                <Link to={"/"} className={styles.left}>
                    <img src={logo} alt="Logo" />
                </Link>
                <div className={styles.right}>
                    <img src={theme ? sun : moon} alt="" />
                    <i className="fa fa-toggle-on" onClick={handleChangeTheme}></i>
                    <img src={theme ? moon : sun} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
