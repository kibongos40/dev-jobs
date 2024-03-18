import React from "react";
import data from "../assets/data.json";
import Form from "./Form";
import Job from "./Job";
import styles from "./styles/Jobs.module.css"

import { useState } from "react";

interface ResultProps{
    query: string,
    location: string,
    count: number
}

const Results:React.FC<ResultProps> = (props)=>{
    const {query,location,count} = props;
    if(query.length > 0){
        return (
            <>
                <h2>
                    <span className={styles.blue}>'{query}'</span> search results
                    {location.length > 0 ? <span className={styles.blue}> in {location}</span> : ""}
                </h2>
                <h4>{count} result(s) found</h4>
            </>
        )
    }
    if(query.length <= 0 && location.length > 0){
        return (
            <h1>
                Jobs in <span className={styles.blue}>{location}</span>
            </h1>
        )
    }
}

const Jobs:React.FC = ()=>{
    const jobs = data;
    const [filter, setFilter] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState(false);
    const regex = new RegExp(filter,"i");
    const regexl = new RegExp(location,"i");
    let found = jobs.filter((job)=>{
        return ((regex.test(job.position) || regex.test(job.company)) && regexl.test(job.location))
    })
    if(time){
        const final = found.filter((job)=>{
            return(job.contract == "Full Time");
        });
        found = final;
    }
    return(
        <>
            <Form filter={setFilter} location={setLocation} fulltime={setTime}  />
            <div className={styles.jobs}>
                <div style={{width: "100%", textAlign: "center", padding: "20px"}}>
                    <Results query={filter} location={location} count={found.length} />
                </div>
            {
                found.map((job,index)=> <Job job={job} key={index} />)
            }
            {found.length == 0 ? <h2>No jobs found</h2> : ""}
            </div>
        </>
    );
}

export default Jobs;