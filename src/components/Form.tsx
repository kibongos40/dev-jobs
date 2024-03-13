import seachIcon from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";
import styles from "./styles/Form.module.css"
import Button from "./Button";

const Form: React.FC = () => {
    return (
        <form className={styles.form}>
            <div className={styles.input}>
                <img src={seachIcon} alt="Search Icon" />
                <input type="text" placeholder="Filter by title, companies, expertise..."/>
            </div>
            <div className={styles.location}>
                <img src={locationIcon} alt="" />
                <input name="location" type="text" placeholder="Filter by location..."/>
            </div>
            <div className={styles.submit}>
                <div style={{whiteSpace: "nowrap"}} className={styles.fulltime}>
                    <i className="fa fa-square-check"></i>
                    &nbsp;
                    Full-time only
                </div>
                <Button text="Search" />
            </div>
        </form>
    )
};

export default Form;