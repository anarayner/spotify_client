import React from 'react';
import {ITrack} from "../types/tracks";
import {Box, Grid} from "@mui/material";
import TrackItem from "./TrackItem";
import styles from '../styles/Main.module.scss'

interface TrackListProps{
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return (
        <Grid container direction='column' className={styles.main_box}>
             <Box p={2}>
                 {tracks.map(track =>
                     <TrackItem
                         key={track._id}
                         track={track}
                     />
                     )}
             </Box>
        </Grid>
    );
};

export default TrackList;
