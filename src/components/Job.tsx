
import { Link } from "react-router-dom";
import styles from "./styles/Job.module.css"
import {isDark} from "./Nav";

interface JobProps{
    job: {
        logo: string,
        postedAt: string,
        contract: string,
        position: string,
        company: string,
        location: string,
        logoBackground: string,
        id: number
    }
}

const Job:React.FC<JobProps> = (props)=>{
    const {job} = props;
    return(
        <Link to={"/"+job.id} className={styles.job}>
            <div className={`${styles.inner} ${isDark ? styles.dark : ''}`}>
                <div className={styles.jobPicture}  style={{backgroundColor: job.logoBackground}}>
                    <img src={""+job.logo} alt="" />
                </div>
                <div className={styles.details}>
                    <div className={styles.info}>
                        {job.postedAt} &#8226; {job.contract}
                    </div>
                    <div className={styles.position}>
                        {job.position}
                    </div>
                    <div className={styles.company}>
                        {job.company}
                    </div>
                    <div className={styles.location}>
                        {job.location}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Job;