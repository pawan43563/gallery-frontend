import { useEffect, useState, MouseEventHandler } from "react";
import ImageModal from "../../components/ImageModal/ImageModal";
import styles from './Home.module.scss';

const Home: React.FC = () =>{
    const [data ,setData] = useState<any>()
    const [imgItem ,setimgItem] = useState<any>()
    const [isOpen, setIsOpen] =useState(false)

    const getData=async()=>{
        fetch('http://localhost:4000/gallery')
        .then((res)=> {
            return res.json()
        })
        .then((res)=>{
            let arr = [...res.data.items]
            setData(arr)
        })

    }

    useEffect(()=>{
        getData()
    },[])

    const toggleModal:any=()=>{
        setIsOpen((prevState)=>!prevState)

    }

    const ClickHandle=(event:any)=>{
        let id = event.target.parentElement.parentElement.id
        let imageItem = data.find((item:any)=> item.uid === id )
        setIsOpen(true)
        setimgItem(imageItem)
    }
   
    return(
        <>
        <div className={styles.pin_container}>
            { data && data.map((item:any, i:any)=>{ 
                    return <div className={styles.card+' '+
                                (i%4 === 0 ? styles.card_large : '')+' '+
                                (i%2 === 0 ? styles.card_small :styles.card_medium)} 
                                id={item.uid}
                                key={item.uid}
                                >
                                <img src={item.image.url} alt='image' />
                                <div className={styles.overlay}>
                                        <p>{item.image_caption}</p>
                                        <button onClick={ClickHandle} className={styles.viewBtn}> view </button>
                                </div>
                        </div>
                })
            }
        </div>
        {isOpen && 
            <ImageModal data = {imgItem} handleModal={toggleModal} />
        }
        </>
    )
}

export default Home;
