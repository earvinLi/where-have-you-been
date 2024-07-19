import { Inter } from 'next/font/google';

import { Box, CssBaseline } from '@mui/material';

import AppSidebar from '@/components/AppSidebar';
import AppHeader from '@/components/AppHeader';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const appSidebarWidth = 240;
const appHeaderHeight = 64;

export const metadata = {
  title: 'Whyb',
  description: 'Where have you been',
};

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <AppSidebar />
        <AppHeader />
        <Box
          sx={{
            width: `calc(100% - ${appSidebarWidth}px)`,
            height: '100vh',
            mt: `${appHeaderHeight}px`,
            ml: `${appSidebarWidth}px`,
            backgroundColor: '#dce1e1',
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
