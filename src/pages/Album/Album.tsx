import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {apicallsingle} from '../../cms/cms_api'
import Loader from 'react-loader-spinner';
import styles from './Album.module.scss';

interface AlbumInterface{
    album:object
}

interface paramsInterface{
    albumid:string,
    userid:string
}

const Album:React.FC=()=>{

    const { userid,albumid }= useParams<paramsInterface>();
    const [albumArr,setalbum]=useState([])
    const [imgarr,setImg]=useState([])
    const [name,setname]=useState("")

    const getImage= async ()=>{
        const arr:any=[]
        let flag=0
        await albumArr.map(async(e:any)=>{
            const url1=`http://localhost:4000/users/sss/asss/${e.uid}`   
            let response=await apicallsingle(url1)
            arr.push(response.data.image.url)
            flag=flag+1
            
            if(flag===albumArr.length-1){               
                await setImg(arr)  
            }
        })

    
    }



    useEffect(()=>{

        const getalbum=async()=>{
            let url=`http://localhost:4000/users/${userid}/${albumid}`
            let response=await apicallsingle(url)
            await setalbum(response.data[0].galleryimageref)
            await setname(response.data[0].album_name)

        }
        getalbum()

    },[albumid])


    useEffect(()=>{
        getImage()
    },[name])

    return(
            <>
            {   

                imgarr.length>0?
                <div>
                    <h1 className={styles.header}>{name}</h1>
                    <div className={styles.albumcontainer}>
                    {
                        imgarr.map((e,i)=>(
                            <div className={styles.albumcard} key={i}>
                                <img src={e}></img>
                            </div> 
                        ))
                    }
                    </div>
                </div>
                
                :
                <Loader type="ThreeDots" color="black" height="100" width="100" />
            }
            </>
            
            

    )
}

export default Album;