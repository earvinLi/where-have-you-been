import * as React from 'react';

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Logout as SignOutIcon,
} from '@mui/icons-material';

const appSidebarWidth = 240;

export default function AppSidebar() {
  return (
    <Drawer
      sx={{
        width: appSidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: appSidebarWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem key="Dashboard" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* <div style={{ flexGrow: 1 }} /> */}
      <Divider />
      <List>
        <ListItem key="Sign out" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SignOutIcon />
            </ListItemIcon>
            <ListItemText primary="Sign out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
