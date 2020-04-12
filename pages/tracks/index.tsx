import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import styles from '../../styles/Main.module.scss'
import {ITrack} from "../../types/tracks";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] =[
        {_id: '1', name: "Track 1", artist:'AC DC', text: 'TEXT', listens: 5, audio: '-', picture: 'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/11/ACDC-Power-Up-Cover-final-800x800.jpg', comment: []},
        {_id: '2', name: "Track 1", artist:'AC DC', text: 'TEXT', listens: 5, audio: '-', picture: 'https://www.xsnoize.com/wp-content/uploads/2021/09/ACDC-1605114470_edited.jpg', comment: []},
        {_id: '3', name: "Track 1", artist:'AC DC', text: 'TEXT', listens: 5, audio: '-', picture: 'https://www.xsnoize.com/wp-content/uploads/2021/09/ACDC-1605114470_edited.jpg', comment: []},
        {_id: '4', name: "Track 1", artist:'AC DC', text: 'TEXT', listens: 5, audio: '-', picture: 'https://www.xsnoize.com/wp-content/uploads/2021/09/ACDC-1605114470_edited.jpg', comment: []},
    ]
    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card className={styles.main_card}>
                    <Box p={3} >
                        <Grid container justifyContent={'space-between'}>
                            <h1>Track List</h1>
                            <Button className={styles.upload}
                                onClick={()=> router.push('/tracks/create')}
                            >
                                Upload
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;
