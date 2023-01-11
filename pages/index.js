import styles from './index.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
    const imageArray = [
        'house_back',
        'living_room',
        'balcony_1',
        'kitchen_2',
        'main_room_1',
        'study_1'
    ]
    const exterior = [
        'house_front',
        'exterior_1',
        'house_back',
        'garden_2',
        'house_garden',
        'house_front_2',
    ]
    const kitchen = [
        'kitchen',
        'kitchen_2',
        'laundry',
        'laundry_2',
    ]
    const diningRoom = [
        'dining_room_1',
        'dining_room_2'
    ]
    const livingRoom = [
        'entrance',
        'living_room',
        'living_room_1',
        'living_room_3',
    ]
    const rooms = [
        'main_room_1',
        'main_room_closet_1',
        'main_room_bath',
        'secondary_room_1',
        'second_room_bath',
        'third_room_1'
    ]
    const tvRoom = [
        'tv_room_1',
        'tv_room_2',
    ]
    const study = [
        'study_1',
        'study_2',
        'balcony_1',
        'balcony_2',
        'balcony_3',
    ]
    const [galleryArray, setGalleryArray] = useState(exterior)
    return (
        <>
            <Head>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
            </Head>
            <main className={styles['container']}>
                <header className={styles['container__header']}>
                    <div className={styles['container__header-content']}>
                        <h1 className={styles['container__header-title']}>
                            Casa Campestre Guaymaral
                        </h1>
                        <div className={styles['container__header-items']}>
                            <h6>es/en</h6>
                            <button className={styles['cta']}>Más Información</button>
                        </div>
                    </div>
                </header>
                <section className={styles['main']}>
                    <div className={styles['main__info']}>
                        <div className={styles['main__content']}>
                            <div className={styles['main__content-item']}>
                                <i className={`material-symbols-outlined ${styles['main__content-icon']}`}>square_foot</i>
                                <div className={styles['main__content-description']}>
                                    <h4>Área construida</h4>
                                    <p>320mts</p>
                                </div>
                            </div>
                            <div className={styles['main__content-item']}>
                                <i className={`material-symbols-outlined ${styles['main__content-icon']}`}>dashboard</i>
                                <div className={styles['main__content-description']}>
                                    <h4>Área Total</h4>
                                    <p>1420mts</p>
                                </div>
                            </div>
                            <div className={styles['main__content-item']}>
                                <i className={`material-symbols-outlined ${styles['main__content-icon']}`}>king_bed</i>
                                <div className={styles['main__content-description']}>
                                    <h4>Habitaciones</h4>
                                    <p>4</p>
                                </div>
                            </div>

                            <div className={styles['main__content-item']}>
                                <i className={`material-symbols-outlined ${styles['main__content-icon']}`}>garage</i>
                                <div className={styles['main__content-description']}>
                                    <h4>Parqueaderos</h4>
                                    <p>4</p>
                                </div>
                            </div>

                            <div className={styles['main__content-item']}>
                                <i className={`material-symbols-outlined ${styles['main__content-icon']}`}>apartment</i>
                                <div className={styles['main__content-description']}>
                                    <h4>Estrato</h4>
                                    <p>6</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles['main__image']}>
                        <Image src={'/img/house_front_2.jpg'} alt={'House'} fill/>
                    </div>
                </section>
                <section className={styles['description']}>
                    <Image src={'/img/map.jpg'} alt={''} fill/>
                    <div className={styles['description__shadow-top']}/>
                    <div className={styles['description__container']}>
                        <div className={styles['description__content']}>
                            <p>
                                Hermosa casa campestre en hacienda <strong>San Sebastián</strong> a minutos del centro comercial Bima en
                                Bogotá, Colombia. <br/>Casa de diseño moderno con <strong>320mts</strong> construidos en un lote de <strong>1420mts </strong>
                                que proporciona privacidad y majestuosas vistas de la vegetación de la sabana.
                            </p>
                            <div className={styles['description__show']}>
                                <div className={styles['description__image']}>
                                    <div className={styles['description__image-container']}>
                                        <Image src={'/img/kitchen.jpg'} alt={''} fill/>
                                    </div>
                                </div>
                                <ul className={styles['description__items']}>
                                    <li><i className={'material-symbols-outlined'}>bed</i>4 Habitaciones, cada una con
                                        baño privado
                                    </li>
                                    <li><i className={'material-symbols-outlined'}>shower</i>Baño social</li>
                                    <li><i className={'material-symbols-outlined'}>kitchen</i>Cocina con mesón integrado
                                    </li>
                                    <li><i className={'material-symbols-outlined'}>weekend</i>Sala con doble altura</li>
                                    <li><i className={'material-symbols-outlined'}>table_restaurant</i>Comedor</li>
                                    <li>
                                        <button className={styles['cta']}>¡Lo quiero!</button>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles['description__show']}>
                                <ul className={styles['description__items']}>
                                    <li><i className={'material-symbols-outlined'}>menu_book</i>Estudio en segunda
                                        planta
                                    </li>
                                    <li><i className={'material-symbols-outlined'}>outdoor_grill</i>Zona de asados</li>
                                    <li><i className={'material-symbols-outlined'}>balcony</i>Terraza</li>
                                    <li><i className={'material-symbols-outlined'}>garage</i>4 garajes</li>
                                    <li><i className={'material-symbols-outlined'}>forest</i>Rodeado de bellos jardines
                                    </li>
                                    <li><i className={'material-symbols-outlined'}>shield</i>Conjunto privado</li>
                                    <li>
                                        <button className={styles['cta']}>Más Información</button>
                                    </li>
                                </ul>
                                <div className={styles['description__image']}>
                                    <div className={styles['description__image-container']}>
                                        <Image src={'/img/house_garden.jpg'} alt={''} fill/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['description__shadow-bottom']}/>
                </section>
                <section className={styles['carousel']}>
                    <div className={styles['carousel__container']}>
                        {imageArray.map((image) => (
                            <div className={styles['carousel__item']} key={image}>
                                <Image src={`/img/${image}-min.jpg`} alt={image} fill/>
                            </div>
                        ))}
                        {imageArray.map((image) => (
                            <div className={styles['carousel__item']} key={image}>
                                <Image src={`/img/${image}-min.jpg`} alt={image} fill/>
                            </div>
                        ))}
                    </div>
                </section>
                <h1>Galería</h1>
                <section className={styles['gallery']}>
                    <div className={styles['gallery__container']}>
                        <ul className={styles['gallery__sections']}>
                            <li onClick={() => setGalleryArray(kitchen)}>Cocina y Lavandería</li>
                            <li onClick={() => setGalleryArray(diningRoom)}>Comedor</li>
                            <li onClick={() => setGalleryArray(livingRoom)}>Sala</li>
                            <li onClick={() => setGalleryArray(study)}>Estudio y Terraza</li>
                            <li onClick={() => setGalleryArray(tvRoom)}>Sala TV</li>
                            <li onClick={() => setGalleryArray(rooms)}>Habitaciones</li>
                            <li onClick={() => setGalleryArray(exterior)}>Exterior</li>
                        </ul>
                        <div className={styles['gallery__grid']}>
                            {galleryArray.map((image) => (
                                <div className={styles['gallery__image']} key={image}>
                                    <Image src={`/img/${image}-min.jpg`} alt={image} fill />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
