import React from 'react'
import styles from './Board.module.scss';
import {useHistory} from 'react-router-dom'
interface BoardInterface{
    image:any
}

const Board:React.FC<BoardInterface>=({image})=>{
    console.log("Board ",image);
    let history=useHistory()

    const redirectalbum=()=>{
        history.push('/')
    }


    return (
        <>  
            <div className={styles.board}>
                <div className={styles.info}>
                    <h1>{image.album_name}</h1>    
                    <i className="fa fa-external-link" onClick={redirectalbum}></i>
                </div>
                <div className={styles.cards}>
                    {
                        image.galleryimageref.map((e:any,i:string)=>(
                            <div className={styles.card} key={i}>
                                <h1>{e.uid}</h1>
                            </div>
                        ))
                        
                    }
                </div>
                
                
            </div>
        </>
        
    )

}

export default Board;