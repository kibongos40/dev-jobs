import button from "./styles/Button.module.css"
import styles from "./styles/Details.module.css"

interface DetailsProps{
    job: {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
        content: string;
        items: string[];
    };
    role: {
        content: string;
        items: string[];
    };
    }
}

const Details:React.FC<DetailsProps> = (props)=>{
    const {job} = props;
    return(
<div className={styles.details}>
                    <div className={styles.header} style={{overflow: "visible"}}>
                        <div className={styles.logo} style={{backgroundColor: job.logoBackground}}>
                            <img src={job.logo} alt="Company logo" />
                        </div>
                        <div className={styles.company}>
                            <div>
                                <h2>{job.company}</h2>
                                <p>{job.company}.com</p>
                            </div>
                            <div>
                                <a href={job.website} target="_blank" className={button.button} rel="noopener noreferrer">Company Site</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.gray}>
                            {job.postedAt} &#8226; {job.contract}
                        </p>
                        <div className={styles.title}>
                            <div>
                                <h1>{job.position}</h1>
                                <p className={styles.blue}>{job.location}</p>
                            </div>
                            <a href={job.apply} target="_blank" className={button.button}>Apply Now</a>
                        </div>
                        <div>
                            <p>
                                {job.description}
                            </p>
                        </div>
                        <div>
                            <h2>Requirements</h2>
                            <p>
                                {job.requirements.content}
                            </p>
                            <ul>
                                {job.requirements.items.map((item,index)=> <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h2>What you will do</h2>
                            <p>
                                {job.role.content}
                            </p>
                            <ol>
                                {job.role.items.map((item,index)=> <li key={index}>{item}</li>)}
                            </ol>
                        </div>
                    </div>
                </div>
    )
}

export default Details;