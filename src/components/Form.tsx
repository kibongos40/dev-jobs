import seachIcon from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";
import styles from "./styles/Form.module.css"
import Button from "./Button";
import { useState } from "react";
import {isDark} from "./Nav";


interface Props{
    filter: (arg: string)=> void,
    location: (arg: string)=> void,
    fulltime: (arg: boolean)=> void
}


const Form: React.FC<Props> = (props) => {
    const {filter,location,fulltime} = props;
    const filterChange = (e: { target: { value: string; }; })=>{
        filter(e.target.value);
    }
    const locationChange = (e: { target: { value: string; }; })=>{
        location(e.target.value);
    }
    const timeChange = (e: { target: { checked: boolean; }; })=>{
        fulltime(e.target.checked);
        setCheck(e.target.checked);
    }
    const [check, setCheck] = useState(false);
    return (
        <form className={`${styles.form} ${isDark ? styles.dark:''}`}>
            <div className={styles.input}>
                <img src={seachIcon} alt="Search Icon" />
                <input onChange={filterChange} type="text" placeholder="Filter by title, companies, expertise..."/>
            </div>
            <div className={styles.location}>
                <img src={locationIcon} alt="" />
                <input name="location" onChange={locationChange} type="text" placeholder="Filter by location..."/>
            </div>
            <div className={styles.submit}>
                <div style={{whiteSpace: "nowrap"}} className={styles.fulltime}>
                    <input type="checkbox" checked={check} onChange={timeChange} name="fulltime" id="fulltime" />
                    &nbsp;
                    Full-time only
                </div>
                <Button text="Search" />
            </div>
        </form>
    )
};

export default Form;