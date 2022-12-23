 // props 요소
 // id , key , img , year , rating, genres, title, content
import styles from "./Movie_list.module.css"

function Movie_list(props){
    const div_style = {
        backgroundImage : props.back_img
    }
    return <div style={div_style} className={styles.movie}>
        <img src = {props.img}/>
        <div >
            <h2 className={styles.title}>{props.title}</h2>
            <h3 className= {styles.rating}>평점 : {props.rating}</h3>
            <div>
                <span className={styles.list}>장르 : </span>
                {props.genres.map((current,index)=>
                <span className={styles.list} key = {index}>
                    {index===props.genres.length-1 ? current : current + ", "}
                </span>)}
                {props.content ?
                  props.content.length > 200 ? 
                  <p className={styles.content}>
                    {props.content.slice(0,200)}...</p>
                    : <p className={styles.content}>props.content</p> 
                 : <p>영화 설명이 없습니다.</p>}     
            </div>
        </div>
        </div>
}


export default Movie_list;