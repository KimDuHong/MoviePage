import styles from "./Loading.module.css"
function Loading(){
    return(
        <div className={styles.loading_container}>
            <div className={styles.loading}></div>
            <div className={styles.loading_text}>loading</div>
        </div>
    
    )
}

export default Loading;