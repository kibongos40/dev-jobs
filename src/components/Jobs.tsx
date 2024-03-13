import data from "../assets/data.json";
import styles from "./styles/Jobs.module.css"

const Jobs:React.FC = ()=>{
    const jobs = data;
    return(
        <>
            <div className={styles.jobs}>
            {
                jobs.map((job)=>{
                    return (
                <div className={styles.job}>
                    <div className={styles.inner}>
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
                </div>)
                })
            }
            </div>
        </>
    );
}

export default Jobs;