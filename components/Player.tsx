import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/tracks";
import TrackProgress from "./TrackProgress";

const Player = () => {
    const active = false
    const track: ITrack = {_id: '1', name: "Track 1", artist:'AC DC', text: 'TEXT', listens: 5, audio: '-', picture: 'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/11/ACDC-Power-Up-Cover-final-800x800.jpg', comment: []}

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()} className={styles.play_button}>
                {active? <Pause/> : <PlayArrow/>}
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div className={styles.text}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={()=> ({})}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={()=> ({})}/>
        </div>

    );
};

export default Player;
