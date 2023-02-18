import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MENU from "../constants/Menu";

const DrawerMenu = ({ open, dispatch }) => {
    return <List>
        {Object.values(MENU).map((m) => {
            let Icon = m.Icon
            return <ListItem key={m.title} disablePadding sx={{ display: 'block' }} onClick={() => {
                dispatch({
                    type: "CHANGE_TOOL", payload: {
                        "item": m.key,
                        "Content": m.Content,
                    }
                })
            }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        <Icon />
                    </ListItemIcon>
                    <ListItemText primary={m.title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>

        })}
    </List>
}


export default DrawerMenu