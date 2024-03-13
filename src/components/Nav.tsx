import styles from "./styles/Nav.module.css"
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import logo from "../assets/desktop/logo.svg";

import Form from "./Form";

const Nav:React.FC = ()=>{
    return(
    <div className={styles.nav}>
        <div className={styles.header}>
            <div className={styles.left}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.right}>
                <img src={sun} alt="" />
                <i className="fa fa-toggle-on"></i>
                <img src={moon} alt="" />
            </div>
        </div>
        <div style={{overflow: "visible"}}>
            <Form />
        </div>
    </div>
    );
}

export default Nav;