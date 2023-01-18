import React from 'react'
import styles from './vrViewer.module.scss'
import * as PANOLENS from "panolens";

const panorama = new PANOLENS.ImagePanorama("/img/vr360/test2.jpg");
const viewer = new PANOLENS.Viewer({
    container: document.querySelector("#coucou")
});
viewer.add(panorama);

const VrViewer = () => {
    return (
        <div className={styles['vr-viewer']}>
            <div id="coucou" />
        </div>
    )
}

export default VrViewer