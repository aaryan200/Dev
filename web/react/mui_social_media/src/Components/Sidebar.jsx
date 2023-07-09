import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export default function Sidebar() {
    return (
        <Box flex={1} p={2} sx={{
            display: { xs: "none", sm: "block" }
        }}>
            <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent="a" href="#home">
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent="a" href="#home">
                        <ListItemIcon>
                            <Pages/>
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent="a" href="#home">
                        <ListItemIcon>
                            <Group/>
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent="a" href="#home">
                        <ListItemIcon>
                            <Storefront/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent="a" href="#home">
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent="a" href="#home">
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent="a" href="#home">
                        <ListItemIcon>
                            <AccountBox/>
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton LinkComponent="a" href="#home">
                        <ListItemIcon>
                            <ModeNight/>
                        </ListItemIcon>
                        <Switch />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    )
}