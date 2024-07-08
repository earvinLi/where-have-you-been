import { Box, CssBaseline } from '@mui/material';

import AppSidebar from '@/components/AppSidebar';
import AppHeader from '@/components/AppHeader';
import MemoryPanel from '@/modules/dashboard/MemoryPanel';

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppSidebar />
      <AppHeader />
      <MemoryPanel />
    </Box>
  );
}
