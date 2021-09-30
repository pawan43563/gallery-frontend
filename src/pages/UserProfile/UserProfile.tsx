import React, { useEffect, useState } from 'react';
import {apicallsingle} from '../../cms/cms_api'
import { useParams } from "react-router-dom";
import Loader from 'react-loader-spinner';
import styles from './UserProfile.module.scss';
import UserBoards from '../../components/UserBoards/UserBoards'

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
    boards:Array<object>
}

const UserProfile:React.FC=()=>{
    
    const { uid }= useParams<paramsInterface>();
    const [user,setUser]=React.useState<SingleUserEntryInterface>()


    useEffect(()=>{
        const getdata=async()=>{
            let data=await apicallsingle(uid);
            data=data.entry
            const userdata:SingleUserEntryInterface={
                user_name:data.user_name,
                user_email:data.user_email,
                bio:data.bio,
                created_at:data.created_at,
                favourite:data.favourite,
                boards:data.boards
            }
            setUser(userdata)
            console.log(userdata);


        }
        getdata()
        
    },[uid])

    return (
        <div className={styles.userContainer}>
            {
                user ?
                <>
                    <div className={styles.userInfo}>
                        <h1>{user.user_name}</h1>
                        <h3>-- {user.bio}</h3>
                    </div>
                    <div className={styles.userBoard}>
                        <UserBoards img={user.boards}/>
                    </div>
                    <div className={styles.favourite}>
                        <div className={styles.favInfo}>
                            <h1>Favourite</h1>
                            <button>Add</button>
                        </div>
                        <div className={styles.cards}> 
                            {
                            
                            user.favourite.imgreference.map((e,i)=>(
                                    <div className={styles.favimgs}>
                                        <h1>a</h1>
                                    </div>
                            ))
                            }  
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