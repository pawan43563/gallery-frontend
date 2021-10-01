import React, { useEffect, useState } from 'react'
import styles from './Board.module.scss';
import {useHistory, useParams} from 'react-router-dom'
import {apicallsingle} from '../../cms/cms_api' 
import Loader from 'react-loader-spinner';
interface BoardInterface{
    image:any
}
interface paramsInterface{
    uid:string
}

const Board:React.FC<BoardInterface>=({image})=>{
    let history=useHistory()
    const [album,setAlbum]=useState([])
    let {uid}=useParams<paramsInterface>()
    const redirectalbum=()=>{
        history.push(`/userprofile/${uid}/album/${image._metadata.uid}`)
    }

    const getImage= async ()=>{
        const arr:any=[]
        let flag=0
        
        await image.galleryimageref.map(async(e:any)=>{
            const url1=`http://localhost:4000/users/sss/asss/${e.uid}`   
            let response=await apicallsingle(url1)
            arr.push(response.data.image.url)
            flag=flag+1
            if(flag===image.galleryimageref.length){               
                await setAlbum(arr)  
            }
        })

    
    }


    useEffect(()=>{
        getImage()   
    },[])

    return (
        <>  
            <div className={styles.board}>
                <div className={styles.info}>
                    <h1>{image.album_name}</h1>    
                    <i className="fa fa-external-link" onClick={redirectalbum}></i>
                </div>
                <div className={styles.cards}>
                    {
                        album.length>0?
                        album.map((e,i)=>(
                            <div className={styles.card} key={i}>
                                 <img src={e}></img>
                             </div>
                        ))
                        :
                        <Loader type="ThreeDots" color="black" height="100" width="100" />
                        
                    }
                </div>
                
                
            </div>
        </>
        
    )

}

export default Board;