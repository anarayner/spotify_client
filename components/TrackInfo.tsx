import React from 'react';
import styles from '../styles/Create.module.scss'
import {TextField} from "@mui/material";

const TrackInfo = () => {
    return (
        <div className={styles.info}>
            <TextField fullWidth className={styles.info_input} label={'Track name'}/>
            <TextField fullWidth className={styles.info_input} label={'Author name'}/>
            <TextField fullWidth className={styles.info_input} label={'Track lyric'}/>
        </div>
    );
};

export default TrackInfo;
