import data from "../assets/data.json";
import Job from "./Job";
import styles from "./styles/Jobs.module.css"

const Jobs:React.FC = ()=>{
    const jobs = data;
    return(
        <>
            <div className={styles.jobs}>
            {
                jobs.map((job)=>{
                    return (
                        <Job key={job.id} job={job} />
                    )
                })
            }
            </div>
        </>
    );
}

export default Jobs;