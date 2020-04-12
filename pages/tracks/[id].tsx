import React from 'react';
import {Box, Button, Container, Grid, TextField} from "@mui/material";
import {ITrack} from "../../types/tracks";
import TrackLayout from "../../layouts/TrackLayout";
import {useRouter} from "next/router";
import styles from '../../styles/Track.module.scss'


const TrackPage = () => {
    const track: ITrack = {_id: '1', name: "Track 1", artist:'AC DC', text: 'TEXT', listens: 5, audio: '-', picture: 'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/11/ACDC-Power-Up-Cover-final-800x800.jpg', comment: []}
    const router = useRouter()
    return (
        <TrackLayout>
            <Container>
                <Button
                    className={styles.back}
                    variant={'outlined'}
                    onClick={()=> router.push('/tracks')}>
                     Back
                </Button>
                <Grid container style={{marginTop: 20}}>
                    <img className={styles.img}
                         src={track.picture} width={200} height={200}/>
                    <div style={{marginLeft: 30}}>
                        <h1>{track.name}</h1>
                        <h1>{track.artist}</h1>
                        <h1>{track.listens}</h1>
                    </div>

                </Grid>
                <Box className={styles.track_box}>
                <h1>Track lyric</h1>
                {track.text}
                <h1>Comments</h1>
                <Grid container>
                    <TextField
                        className={styles.input}
                        label={'Your name'}
                        fullWidth
                    />
                    <TextField
                        className={styles.input}
                        label={'Comment'}
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <Button  className={styles.send}>Send</Button>
                </Grid>
                    <div>
                        {track.comment.map(com =>
                             <div>
                                 <div>Username: {com.username}</div>
                                 <div>{com.text}</div>
                             </div>
                        )}
                    </div>
                </Box>

            </Container>
        </TrackLayout>
    );
};

export default TrackPage;
