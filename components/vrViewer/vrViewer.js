import React from 'react'
import styles from './vrViewer.module.scss';

const VrViewer = () => {
    return (
        <div className={styles['vr-viewer']}>
            <iframe height={'100%'} width={'100%'} src="https://vr-viewer-pearl.vercel.app"/>
        </div>
    )
}

export default VrViewer