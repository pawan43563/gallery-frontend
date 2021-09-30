import React from 'react';

interface AlbumInterface{
    album:object
}

const Album:React.FC<AlbumInterface>=({album})=>{
    console.log(album);
    
    return(
        <h1>Album Page</h1>
    )
}

export default Album;