import React from 'react';
import {ITrack} from "../types/tracks";
import styles from '../styles/TrackItem.module.scss'
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";

interface TrackItemProps{
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()

    return (
        <Card className={styles.track}
              onClick={()=> router.push('/tracks/' +track._id) }>
            <IconButton onClick={e => e.stopPropagation()} className={styles.play_button}>
                {active? <Pause/> : <PlayArrow/>}
            </IconButton>
            <img src={track.picture} className={styles.img}/>
            <Grid container direction='column'>
                <div>{track.name}</div>
                <div className={styles.text}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton onClick={e => e.stopPropagation()} className={styles.delete_icon} >
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;
