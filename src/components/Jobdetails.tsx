import { useParams } from "react-router"
import Nav from "./Nav";
import data from "../assets/data.json"
import Jobs from "./Jobs";
import Details from "./Details";
import styles from "./styles/Jobdetails.module.css"
import buttonStyle from "./styles/Button.module.css"

interface FooterProps{
    position: string,
    company: string,
    apply: string
}

const Footer:React.FC<FooterProps> = (props)=>{
    const {position, company, apply} = props;
    return(
        <div className={styles.footer}>
            <div className={styles.inner}>
                <div>
                    <h3>{position}</h3>
                    <p className={styles.gray}>{company}</p>
                </div>
                <a href={apply} className={buttonStyle.button} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </div>
        </div>
    )
}

const Jobdetails:React.FC = ()=>{
    const params = useParams();
    console.log(params);
    const jobid = Number(params.jobid);
    console.log(jobid);
    const found = data.filter((job) => { return job.id == jobid});
    return (
        <div style={{overflow: "visible", zIndex: 20}}>
            <Nav />
            <div style={{overflow: "visible"}}>
                {
                    found.length == 1 ? <Details job={found[0]} /> : <Jobs />
                }
            </div>
            <div className={styles.footer}>
                {
                    found.length == 1 ? <Footer apply={found[0].apply} company={found[0].company} position={found[0].position}  /> : ""
                }
            </div>
        </div>
    );
}

export default Jobdetails;