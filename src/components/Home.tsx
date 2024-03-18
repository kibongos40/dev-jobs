import Jobs from "./Jobs";
import Nav from "./Nav";
import styles from "./styles/Home.module.css"
import Button from "./Button";

const Home:React.FC = ()=>{
    document.title = "Home - Devjobs";
    return (
        <div id="container" className={styles.container}>
            <Nav/>
            <Jobs />
            <div style={{textAlign: "center"}}>
                <Button text="Load More" />
            </div>
        </div>
    );
}

export default Home;