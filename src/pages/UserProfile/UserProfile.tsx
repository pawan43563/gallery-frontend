import React, { useEffect, useState } from 'react';
import {apicallsingle} from '../../cms/cms_api'
import { useParams } from "react-router-dom";
import Loader from 'react-loader-spinner';
import styles from './UserProfile.module.scss';
import UserBoards from '../../components/UserBoards/UserBoards'
import axios from 'axios';
const {REACT_APP_API_KEY,REACT_APP_DELIVERY_TOKEN,REACT_APP_ENVIRONMENT_NAME}=process.env
const CONTENT_TYPE='galleryusers'


interface paramsInterface{
    uid:string
}
interface SingleUserEntryInterface{
    bio:string,
    created_at:string,
    user_name:string,
    user_email:string,
    favourite:{
        imgreference:Array<object>
    },
    boards:any
}

interface ImageArr{
    imgreference:Array<string>
}

interface PictureInterface{
    pictureFile:string,
    title:string,
    image_caption:string
}

const UserProfile:React.FC=()=>{
    
    const { uid }= useParams<paramsInterface>();
    const [user,setUser]=React.useState<SingleUserEntryInterface>()
    const [imgarr,setImg]=useState([])
    const [picture, setPicture] = useState("");
    const [title,settitle]=useState("")
    const [caption,setcaption]=useState("")

    const getImage= async (imgarr:any)=>{
        const arr:any=[]
        let flag=0
        await imgarr.imgreference.map(async(e:any)=>{
            const url1=`http://localhost:4000/users/${uid}/asss/${e.uid}`   
            let response=await apicallsingle(url1)
            arr.push(response.data.image.url)
            flag=flag+1
            if(flag===imgarr.imgreference.length){               
                await setImg(arr)  
            }
        })

    
    }


    useEffect(()=>{        
        const getdata=async()=>{
            const url1=`http://localhost:4000/users/${uid}`
            let data=await apicallsingle(url1);
            
            data=data.data
            const userdata:SingleUserEntryInterface={
                user_name:data.user_name,
                user_email:data.user_email,
                bio:data.bio,
                created_at:data.created_at,
                favourite:data.favourite,
                boards:data.boards
            }
            setUser(userdata)
            await getImage(userdata.favourite)
            
        }
        getdata()

    },[uid])
    


    const setImageAction = async (event:any) => {
        event.preventDefault()
    
        const formData = new FormData();

        console.log("picture",picture);
        
        formData.append("Image", picture);
        formData.append('title',title);
        formData.append('image_caption',caption);

        const data = await fetch("http://localhost:4000/gallery", {
            method: "post",
            body: formData
        });
        const uploadedImage = await data.json();
        console.log(uploadedImage);
        
        if (uploadedImage) {
            console.log("Successfully uploaded image");
            setPicture("")
            setcaption("")
            settitle("")
        } else {
            alert("There was an error while uploading picture")
        }

    };
    const uploadPicture = (event:any) => {
        event.preventDefault()
        setPicture(event.target.files[0])

        
    };
  
    const changetitle=(e:any)=>{
        settitle(e.target.value)
    }

    const changecaption=(e:any)=>{
        setcaption(e.target.value)
    }

    return (
        <div className={styles.userContainer}>
            {
                user ?
                <>  

                    <div className={styles.userInfo}>
                        <h1>{user.user_name}</h1>
                        <h3>-- {user.bio}</h3>
                    </div>
                    <div className={styles.upload}>
                        <form onSubmit={setImageAction} encType='multipart/form-data' className={styles.form} >
                            <input type="text" placeholder="Add Title" name="title" onChange={changetitle}/>
                            <input type="text" placeholder="Add Image Caption" name="caption" onChange={changecaption} />

                            <input type="file" name="image" onChange={uploadPicture} />
                            <br />
                            <br />
                            <button type="submit" name="upload">
                            Upload Image
                            </button>
                        </form>
                    </div>
                    
                    <div className={styles.userBoard}>
                        <UserBoards img={user.boards}/>
                    </div>
                    
                    <div className={styles.userBoard}>
                        <div className={styles.favourite}>
                            <div className={styles.favInfo}>
                                <h1>Favourite</h1>
                                <button>Add</button>
                            </div>
                            <div className={styles.cards}> 
                                {
                                imgarr.length>0 ?

                                imgarr.map((e,i)=>(
                                        <div className={styles.favimgs} key={i}>
                                            <img src={e}></img>
                                        </div>
                                )):
                                <Loader type="ThreeDots" color="black" height="100" width="100" />
                                }  
                            </div>
                        </div>
                    </div>
                    
                </>
                    
                :
                <Loader type="ThreeDots" color="black" height="100" width="100" />
            
            } 
        </div>
        
    )

}

export default UserProfile;