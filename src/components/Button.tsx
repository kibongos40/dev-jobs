import styles from "./styles/Button.module.css"

interface ButtonProps{
    text: string
}

const Button:React.FC<ButtonProps> = (props)=>{
    const {text} = props;
    return (
        <>
            <button className={styles.button}>
                {text}
            </button>
        </>
    )
}

export default Button;