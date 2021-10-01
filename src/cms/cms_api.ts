
const {REACT_APP_API_KEY,REACT_APP_DELIVERY_TOKEN,REACT_APP_ENVIRONMENT_NAME}=process.env

const CONTENT_TYPE='galleryusers'

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

export const apicallsingle=async(url:string)=>{
    let obj={
        method:"GET",
        // headers:{
        //     "Accept":"application/json",
        //     "api_key":"blt8d2b64db623d6246",
        //     "access_token":"csb9b3a957506f52d30a666a0d"
        // }
    }
    try{
        let response=await fetch(url,obj);
        
        return response.json()
    }catch(error){
        console.log(error);
    }



}