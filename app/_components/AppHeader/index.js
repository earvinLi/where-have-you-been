import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';

const appSidebarWidth = 240;

export default function AppHeader() {
  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="fixed"
      sx={{
        width: `calc(100% - ${appSidebarWidth}px)`,
        ml: `${appSidebarWidth}px`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Memories
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Avatar>EL</Avatar>
      </Toolbar>
    </AppBar>
  );
}
