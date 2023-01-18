import React, { useEffect, useState } from 'react'
import styles from './imageViewer.module.scss'
import Image from 'next/image'

const ImageViewer = ({isOpen, setIsOpen, image}) => {
    const size = 1600

    return (
        isOpen && <div className={styles['image-viewer']}>
            <div className={styles['image-viewer__container']}>
                <Image
                    src={`/img/${size}/${image}-${size}.webp`}
                    alt={'Image'}
                    fill
                    placeholder={'blur'}
                    blurDataURL={`/img/640/${image}-640.webp`}
                />
            </div>
            <i className={'material-symbols-outlined'} onClick={() => setIsOpen(false)}>close</i>
            <div className={styles['image-viewer__shadow']} onClick={() => setIsOpen(false)}/>
        </div>
    )
}

export default ImageViewer