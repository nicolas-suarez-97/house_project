import styles from './index.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ImageViewer from '../components/imageViewer/imageViewer'

export default function Home() {
    const whatsAppLink = 'https://wa.me/573005568874?text=Hola!%20Quisiera%20información%20de%20la%20casa%20de%20Guaymaral'
    const tour360 = 'https://house-vr-viewer.vercel.app'
    const imageArray = [
        'exterior_2',
        'living_room',
        'balcony_1',
        'kitchen_2',
        'main_room_1',
        'study_1'
    ]
    const exterior = [
        'house_front',
        'exterior_1',
        'exterior_2',
        'exterior_3',
    ]
    const exterior_list = [
        {text: 'Jardín Zen', icon: 'self_improvement'},
        {text: 'Zona BBQ', icon: 'outdoor_grill'},
        {text: '4 accesos al interior de la casa', icon: 'door_sliding'},
        {text: 'Valla de arboles alrededor', icon: 'forest'}
    ]
    const kitchen = ['kitchen', 'kitchen_2', 'laundry', 'laundry_2']
    const kitchen_list = [
        {text: 'Horno', icon: 'cake'},
        {text: 'Lavaplatos automatico', icon: 'shower'},
        {text: 'Estufa 5 puestos', icon: 'multicooker'},
        {text: 'Mesón de granito integrado', icon: 'flatware'},
        {text: 'Muebles en madera', icon: 'event_seat'},
        {text: 'Acceso al patio', icon: 'door_sliding'}
    ]

    const diningRoom = ['dining_room_1', 'dining_room_2']
    const diningRoom_list = [
        {text: 'Acceso a jardines por puerta corrediza', icon: 'door_sliding'},
        {text: 'Mesón de madera', icon: 'event_seat'}
    ]
    const livingRoom = [
        'entrance',
        'living_room',
        'living_room_1',
        'living_room_3'
    ]
    const livingRoom_list = [
        {text: 'Sala de doble altura', icon: 'grid_view'},
        {text: 'Cortinas automaticas', icon: 'build'},
        {text: 'Chimenea', icon: 'fireplace'},
        {text: 'Acceso a jardines por puerta corrediza', icon: 'door_sliding'}
    ]
    const rooms = [
        'main_room_1',
        'main_room_closet_1',
        'main_room_bath',
        'secondary_room_1',
        'second_room_bath',
        'third_room_1'
    ]
    const rooms_list = [
        {text: 'Walking closet en madera', icon: 'door_sliding'},
        {text: 'Baño privado', icon: 'bathroom'},
        {text: 'Doble lavamanos', icon: 'wash'},
        {text: 'Tina', icon: 'bathtub'}
    ]
    const tvRoom = ['tv_room_1', 'tv_room_2']
    const tvRoom_list = [
        {text: 'Techo corredizo', icon: 'door_sliding'},
        {text: 'Acceso a la zona de BBQ', icon: 'outdoor_grill'}
    ]
    const study = ['study_1', 'study_2', 'balcony_1', 'balcony_2', 'balcony_3']
    const study_list = [
        {text: 'Muebles en madera', icon: 'event_seat'},
        {text: 'Techo taslucido en terraza', icon: 'brightness_7'}
    ]
    const thumbSize = 640

    const [galleryArray, setGalleryArray] = useState(exterior)
    const [listArray, setListArray] = useState(exterior_list)

    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState('')

    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'scroll'
    }, [isOpen])

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                />
            </Head>
            <main className={styles['container']}>
                <header className={styles['container__header']}>
                    <div className={styles['container__header-content']}>
                        <h1 className={styles['container__header-title']}>
                            Casa Campestre Guaymaral
                        </h1>
                        <div className={styles['container__header-items']}>
                            <h6>es/en</h6>
                            <a href={whatsAppLink} className={styles['cta']} target='_blank' rel='noreferrer'>Más Información</a>
                        </div>
                    </div>
                </header>
                <section className={styles['main']}>
                    <div className={styles['main__info']}>
                        <div className={styles['main__content']}>
                            <div className={styles['main__content-item']}>
                                <i
                                    className={`material-symbols-outlined ${styles['main__content-icon']}`}
                                >
                                    square_foot
                                </i>
                                <div className={styles['main__content-description']}>
                                    <h4>Área construida</h4>
                                    <p>320mts</p>
                                </div>
                            </div>
                            <div className={styles['main__content-item']}>
                                <i
                                    className={`material-symbols-outlined ${styles['main__content-icon']}`}
                                >
                                    dashboard
                                </i>
                                <div className={styles['main__content-description']}>
                                    <h4>Área Total</h4>
                                    <p>1420mts</p>
                                </div>
                            </div>
                            <div className={styles['main__content-item']}>
                                <i
                                    className={`material-symbols-outlined ${styles['main__content-icon']}`}
                                >
                                    king_bed
                                </i>
                                <div className={styles['main__content-description']}>
                                    <h4>Habitaciones</h4>
                                    <p>4</p>
                                </div>
                            </div>

                            <div className={styles['main__content-item']}>
                                <i
                                    className={`material-symbols-outlined ${styles['main__content-icon']}`}
                                >
                                    garage
                                </i>
                                <div className={styles['main__content-description']}>
                                    <h4>Parqueaderos</h4>
                                    <p>4</p>
                                </div>
                            </div>

                            <div className={styles['main__content-item']}>
                                <i
                                    className={`material-symbols-outlined ${styles['main__content-icon']}`}
                                >
                                    apartment
                                </i>
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
                                Hermosa casa campestre en hacienda{' '}
                                <strong>San Sebastián</strong> a minutos del centro comercial
                                Bima en Bogotá, Colombia. <br/>
                                Casa de diseño moderno con <strong>320mts</strong> construidos
                                en un lote de <strong>1420mts </strong>
                                que proporciona privacidad y majestuosas vistas de la vegetación
                                de la sabana.
                            </p>
                            <div className={styles['description__show']}>
                                <div className={styles['description__image']}>
                                    <div className={styles['description__image-container']}>
                                        <Image src={'/img/kitchen.jpg'} alt={''} fill/>
                                    </div>
                                </div>
                                <ul className={styles['description__items']}>
                                    <li>
                                        <i className={'material-symbols-outlined'}>bed</i>4
                                        Habitaciones, con baño privado
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>shower</i>Baño
                                        social
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>kitchen</i>Cocina
                                        con mesón integrado
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>weekend</i>Sala
                                        con doble altura
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>
                                            table_restaurant
                                        </i>
                                        Comedor
                                    </li>
                                    <li>
                                        <a href={whatsAppLink} className={styles['cta']} target='_blank' rel='noreferrer'>¡Lo quiero!</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles['description__show']}>
                                <ul className={styles['description__items']}>
                                    <li>
                                        <i className={'material-symbols-outlined'}>menu_book</i>
                                        Estudio y terraza en segunda planta
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>outdoor_grill</i>
                                        Zona de asados
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>garage</i>4
                                        garajes
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>forest</i>Rodeado
                                        de bellos jardines privados
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>shield</i>
                                        Conjunto privado
                                    </li>
                                    <li className={styles['cta__container']}>
                                        <a href={whatsAppLink} className={styles['cta']} target='_blank' rel='noreferrer'>Agendar visita</a>
                                        {/*<a href={tour360} className={styles['cta__secondary']} target='_blank' rel='noreferrer'>Tour 360</a>*/}
                                    </li>
                                </ul>
                                <div className={styles['description__image']}>
                                    <div className={styles['description__image-container']}>
                                        <Image src={'/img/1600/exterior_3-1600.webp'} alt={''} fill/>
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
                                <Image
                                    src={`/img/${thumbSize}/${image}-${thumbSize}.webp`}
                                    alt={image}
                                    fill
                                    priority={true}
                                />
                            </div>
                        ))}
                        {imageArray.map((image) => (
                            <div className={styles['carousel__item']} key={image}>
                                <Image
                                    src={`/img/${thumbSize}/${image}-${thumbSize}.webp`}
                                    alt={image}
                                    fill
                                    priority={true}
                                />
                            </div>
                        ))}
                    </div>
                </section>
                <h1>Ubicación</h1>
                <div className={styles['map']}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.447288101044!2d-74.05531129789163!3d4.812927960158368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f86471aa8bc13%3A0x8af900a059e009f1!2sHacienda%20San%20Sebasti%C3%A1n!5e0!3m2!1ses!2sco!4v1674183171752!5m2!1ses!2sco"
                        width="100%" height="100%" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h1>Galería</h1>
                <section className={styles['gallery']}>
                    <div className={styles['gallery__container']}>
                        <div className={styles['gallery__container-left']}>
                            <ul className={styles['gallery__sections']}>
                                <li
                                    onClick={() => {
                                        setGalleryArray(kitchen)
                                        setListArray(kitchen_list)
                                    }}
                                >
                                    Cocina y Lavandería
                                </li>
                                <li
                                    onClick={() => {
                                        setGalleryArray(diningRoom)
                                        setListArray(diningRoom_list)
                                    }}
                                >
                                    Comedor
                                </li>
                                <li
                                    onClick={() => {
                                        setGalleryArray(livingRoom)
                                        setListArray(livingRoom_list)
                                    }}
                                >
                                    Sala
                                </li>
                                <li
                                    onClick={() => {
                                        setGalleryArray(study)
                                        setListArray(study_list)
                                    }}
                                >
                                    Estudio y Terraza
                                </li>
                                <li
                                    onClick={() => {
                                        setGalleryArray(tvRoom)
                                        setListArray(tvRoom_list)
                                    }}
                                >
                                    Sala TV
                                </li>
                                <li
                                    onClick={() => {
                                        setGalleryArray(rooms)
                                        setListArray(rooms_list)
                                    }}
                                >
                                    Habitaciones
                                </li>
                                <li
                                    onClick={() => {
                                        setGalleryArray(exterior)
                                        setListArray(exterior_list)
                                    }}
                                >
                                    Exterior
                                </li>
                            </ul>
                            <div className={styles['gallery__separator']}></div>
                            <ul className={styles['gallery__items']}>
                                {listArray.map((item) => (
                                    <li key={item}>
                                        <i className={'material-symbols-outlined'} key={item}>
                                            {' '}
                                            {item.icon}
                                        </i>
                                        {item.text}
                                    </li>
                                ))}
                                <li>
                                    {/*<a href={tour360} className={styles['cta__secondary']} target='_blank' rel='noreferrer'>Tour 360</a>*/}
                                </li>
                            </ul>
                        </div>
                        <div className={styles['gallery__grid']}>
                            {galleryArray.map((image) => (
                                <div
                                    className={styles['gallery__image']}
                                    key={image}
                                    onClick={() => {
                                        setImage(image)
                                        setIsOpen(true)
                                    }}
                                >
                                    <Image src={`/img/${thumbSize}/${image}-${thumbSize}.webp`} alt={image} fill/>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <footer className={styles['footer']}/>
            </main>
            <ImageViewer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                image={image}
            />
        </>
    )
}
