import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import styles from "../styles/Main.module.scss";
import Player from "../components/Player";


type LayoutProps = {
    children: React.ReactNode,
};

export default function({children}: LayoutProps){
    return (
        <div className={styles.center}>
            <Navbar/>
            <Container style={{margin: '90px'}}>
                {children}
            </Container>
            <Player/>

        </div>
    );
};


