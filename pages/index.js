import styles from './index.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ImageViewer from '../components/imageViewer/imageViewer'
import * as fbq from '../lib/fbpixel'

export default function Home() {
    const whatsAppLink = 'https://wa.me/573152333321?text=Hola!%20Quisiera%20información%20de%20la%20casa%20de%20Arrayanes'
    const handleContact = () => {
        fbq.event('Contact')
    }
    const tour360 = 'https://house-vr-viewer.vercel.app'
    const imageArray = [
        'casa_arrayanes_comedor',
        'casa_arrayanes_frente_2',
        'casa_arrayanes_habitacion_3',
        'casa_arrayanes_cocina',
        'casa_arrayanes_jardin',
        'casa_arrayanes_terraza',
    ]
    const exterior = [
        'casa_arrayanes_frente_2',
        'casa_arrayanes_frente',
        'casa_arrayanes_jardin',
    ]
    const exterior_list = [
        {text: 'Jardín Zen', icon: 'self_improvement'},
        {text: 'Zona BBQ', icon: 'outdoor_grill'},
        {text: 'Valla de arboles alrededor', icon: 'forest'}
    ]
    const kitchen = ['casa_arrayanes_cocina', 'casa_arrayanes_cocina_2', 'casa_arrayanes_lavanderia']
    const kitchen_list = [
        {text: 'Horno', icon: 'cake'},
        {text: 'Estufa 4 puestos', icon: 'multicooker'},
        {text: 'Mesón integrado', icon: 'flatware'},
        {text: 'Muebles en madera', icon: 'event_seat'},
        {text: 'Acceso al patio', icon: 'door_sliding'}
    ]

    const diningRoom = ['casa_arrayanes_comedor', 'casa_arrayanes_comedor_2']
    const diningRoom_list = [
        {text: 'Acceso a jardines por puerta corrediza', icon: 'door_sliding'},
        {text: 'Mesón de madera', icon: 'event_seat'}
    ]
    const livingRoom = [
        'casa_arrayanes_sala',
        'casa_arrayanes_sala_2',
    ]
    const livingRoom_list = [
        {text: 'Sala de doble altura', icon: 'grid_view'},
        {text: 'Chimenea', icon: 'fireplace'},
    ]
    const rooms = [
        'casa_arrayanes_habitacion_3',
        'casa_arrayanes_baño_principal',
        'casa_arrayanes_habitacion_1',
        'casa_arrayanes_habitcion_2',
        'casa_arrayanes_baño_hab',
    ]
    const rooms_list = [
        {text: 'Walking closet habitación principal', icon: 'door_sliding'},
        {text: 'Baño privado', icon: 'bathroom'},
        {text: 'Tina', icon: 'bathtub'}
    ]
    const tvRoom = ['tv_room_1', 'tv_room_2']
    const tvRoom_list = [
        {text: 'Techo corredizo', icon: 'door_sliding'},
        {text: 'Acceso a la zona de BBQ', icon: 'outdoor_grill'}
    ]
    const study = ['casa_arrayanes_piso_3', 'casa_arrayanes_estudio', 'casa_arrayanes_terraza']
    const study_list = [
        {text: 'Muebles en madera', icon: 'event_seat'},
        {text: 'Maravillosa vista a la sabana', icon: 'brightness_7'}
    ]
    const thumbSize = 640

    const [galleryArray, setGalleryArray] = useState(exterior)
    const [listArray, setListArray] = useState(exterior_list)

    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState('')
    const [index, setIndex] = useState(0)

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
                            Casa Campestre Arrayanes
                        </h1>
                        <div className={styles['container__header-items']}>
                            <h6></h6>
                            <a href={whatsAppLink} onClick={handleContact} className={styles['cta']} target='_blank' rel='noreferrer'>Más Información</a>
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
                                    <p>165mts</p>
                                </div>
                            </div>
                            <div className={styles['main__content-item']}>
                                <i
                                    className={`material-symbols-outlined ${styles['main__content-icon']}`}
                                >
                                    dashboard
                                </i>
                                <div className={styles['main__content-description']}>
                                    <h4>Área Lote</h4>
                                    <p>180mts</p>
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
                                    <p>3</p>
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
                                    <p>2</p>
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
                        <Image src={'/img/casa_arrayanes_frente.jpg'} alt={'House'} fill/>
                    </div>
                </section>
                <section className={styles['description']}>
                    <Image src={'/img/map.jpg'} alt={''} fill/>
                    <div className={styles['description__shadow-top']}/>
                    <div className={styles['description__container']}>
                        <div className={styles['description__content']}>
                            <p>
                                Hermosa casa campestre en {' '}
                                <strong>Camino de Arrayanes</strong> a minutos de la autopista norte Bogotá, Colombia. <br/>
                                Casa de diseño moderno con <strong>165mts</strong> construidos
                                en un lote de <strong>14m x 16m </strong>
                                que proporciona privacidad y majestuosas vistas de la vegetación
                                de la sabana.
                            </p>
                            <div className={styles['description__show']}>
                                <div className={styles['description__image']}>
                                    <div className={styles['description__image-container']}>
                                        <Image src={'/img/casa_arrayanes_sala.jpg'} alt={''} fill/>
                                    </div>
                                </div>
                                <ul className={styles['description__items']}>
                                    <li>
                                        <i className={'material-symbols-outlined'}>bed</i>3
                                        Habitaciones
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
                                        <a href={whatsAppLink} onClick={handleContact} className={styles['cta']} target='_blank' rel='noreferrer'>¡Lo quiero!</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles['description__show']}>
                                <ul className={styles['description__items']}>
                                    <li>
                                        <i className={'material-symbols-outlined'}>menu_book</i>
                                        Estudio y terraza en tercera planta
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>outdoor_grill</i>
                                        Zona de asados
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>garage</i>2
                                        garajes
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>forest</i>Patio rodeado
                                        de bellos jardines privados
                                    </li>
                                    <li>
                                        <i className={'material-symbols-outlined'}>shield</i>
                                        Conjunto privado
                                    </li>
                                    <li className={styles['cta__container']}>
                                        <a href={whatsAppLink} onClick={handleContact} className={styles['cta']} target='_blank' rel='noreferrer'>Agendar visita</a>
                                        {/*<a href={tour360} className={styles['cta__secondary']} target='_blank' rel='noreferrer'>Tour 360</a>*/}
                                    </li>
                                </ul>
                                <div className={styles['description__image']}>
                                    <div className={styles['description__image-container']}>
                                        <Image src={'/img/casa_arrayanes_frente_2.jpg'} alt={''} fill/>
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
                                    src={`/img/${thumbSize}/${image}_${thumbSize}.jpg`}
                                    alt={image}
                                    fill
                                    priority={true}
                                />
                            </div>
                        ))}
                        {imageArray.map((image) => (
                            <div className={styles['carousel__item']} key={image}>
                                <Image
                                    src={`/img/${thumbSize}/${image}_${thumbSize}.jpg`}
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
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3343.26532618027!2d-74.06845289483118!3d4.798378412363245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1710907398993!5m2!1ses!2sco"
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
                                {/*<li*/}
                                {/*    onClick={() => {*/}
                                {/*        setGalleryArray(tvRoom)*/}
                                {/*        setListArray(tvRoom_list)*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    Sala TV*/}
                                {/*</li>*/}
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
                            {galleryArray.map((image, index) => (
                                <div
                                    className={styles['gallery__image']}
                                    key={image}
                                    onClick={() => {
                                        setIndex(index)
                                        setIsOpen(true)
                                    }}
                                >
                                    <Image src={`/img/${thumbSize}/${image}_${thumbSize}.jpg`} alt={image} fill/>
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
                images={galleryArray}
                index={index}
            />
        </>
    )
}
