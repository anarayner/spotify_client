import * as React from 'react';
import styles from '../styles/Navbar.module.scss'


import {useRouter} from "next/router";
import {
    AppBar,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const menuItems = [
    {text: 'Main', href: '/'},
    {text: 'Track List', href: '/tracks'},
    {text: 'Album List', href: '/albums'},
]

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline />
            <AppBar
                className={styles.navbar}
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        MusicBeats
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}

            >
                <div>
                    <IconButton onClick={handleDrawerClose} style={{marginTop: '10px', marginLeft: '15px'}}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <List >
                    {menuItems.map(({text, href}, index) => (
                        <ListItem button key={href} onClick={() => router.push(href)} style={{width: 240}}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}