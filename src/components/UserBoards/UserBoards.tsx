import React, { useEffect, useState } from 'react';
import styles from './UserBoards.module.scss';
import Board from '../Board/Board';

interface UserBoardsInterface{
    img:Array<object>
}

const UserBoards:React.FC<UserBoardsInterface>=({img})=>{

    return (
        <div className={styles.userBoard}>
            <div className={styles.heading}>
                <h1>Boards</h1>
                <button>Add</button>
            </div>
            <div className={styles.board}>
                {
                    img.map((e,i)=>(
                        <Board image={e} key={i}/>
                    ))
                }
            </div>
            

        </div>
    )
}

export default UserBoards;