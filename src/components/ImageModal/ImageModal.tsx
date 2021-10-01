import styles from './ImageModal.module.scss'

interface Props{
    data:any
    handleModal: any
}

const ImageModal: React.FC <Props>= ({data, handleModal}) =>{
    return(
    <> 
        <div className={styles.modalOverlay}> </div>
        <div className={styles.modal}>
            <button onClick={handleModal} className={styles.closeBtn}> X</button>

            <div className={styles.container}>

                <div className={styles.imgContainer}>
                    <img src = {data.image.url} alt="galleryImage"/>
                </div>
                <div className={styles.description}>

                <h1>{data.image_caption}</h1>
                {
                    data.images_tags.map((tag:any)=>{
                        return <span>#{tag}</span>
                    })
                }
                </div>
            </div> 
        </div>
    </>
    )
}

export default ImageModal;