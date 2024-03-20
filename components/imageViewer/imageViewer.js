import React, { useEffect, useRef, useState } from 'react'
import styles from './imageViewer.module.scss'
import Image from 'next/image'

const ImageViewer = ({isOpen, setIsOpen, images, index}) => {
    const size = 1600
    const [indicator, setIndicator] = useState(index + 1)
    const carouselRef = useRef(null)
    const total = images.length

    useEffect(() => {
        if (carouselRef.current) {
            // @ts-ignore
            carouselRef.current.scrollLeft = index * carouselRef.current?.clientWidth
            setIndicator(Math.floor(carouselRef.current.scrollLeft / carouselRef.current.clientWidth) + 1)
        }
    }, [index, isOpen])

    const handleScroll = () => {
        if (carouselRef.current) {
            // @ts-ignore
            setIndicator(Math.floor(carouselRef.current.scrollLeft / carouselRef.current.clientWidth) + 1)
        }
    }

    const onRightClick = (ref, rightScroll) => {
        // @ts-ignore
        ref.current?.scrollBy({
            top: 0,
            left: rightScroll,
            behavior: 'smooth'
        });
    };

    const onLeftClick = (ref, leftScroll) => {
        // @ts-ignore
        ref.current?.scrollBy({
            top: 0,
            left: -leftScroll,
            behavior: 'smooth'
        });
    };

    return (
        isOpen && <div className={styles['image-viewer']}>
            <div className={ styles['image-viewer__indicator'] }>{ `${ indicator }/${ total }` }</div>
            <div
                className={styles['image-viewer__container']}
                ref={carouselRef}
                onScroll={handleScroll}
            >
                <div className={styles['image-viewer__container-main']}>
                    {images.map((image, index) => (
                        <div key={`viewer-image-${index}`} className={styles['image-viewer__item']}>
                            <Image
                                src={`/img/${size}/${image}_${size}.jpg`}
                                alt={'Image'}
                                fill
                            />
                        </div>
                    ))}
                </div>
            </div>
            <i className={'material-symbols-outlined'} onClick={() => setIsOpen(false)}>close</i>
            <button className={ styles['round-button__left'] } onClick={ () => onLeftClick(carouselRef, 100) }>
                <i className={'material-symbols-outlined'}>chevron_left</i>
            </button>
            <button className={ styles['round-button__right'] } onClick={ () => onRightClick(carouselRef, 100) }>
                <i className={'material-symbols-outlined'}>chevron_right</i>
            </button>
            <div className={styles['image-viewer__shadow']} onClick={() => setIsOpen(false)}/>
        </div>
    )
}

export default ImageViewer