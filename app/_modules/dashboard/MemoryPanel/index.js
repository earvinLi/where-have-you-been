'use client';

import { Box, Button, Toolbar, Typography } from '@mui/material';

import { useSharedCreateMemoryModal } from '@/hooks/dashboard/dashboardModalHooks';

import CreateMemoryModal from './CreateMemoryModal';
import MemoryTable from './MemoryTable';

export default function Dashboard() {
  const { openCreateMemoryModal } = useSharedCreateMemoryModal();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: 'background.default',
        p: 3,
      }}
    >
      <Toolbar />
      <Button onClick={openCreateMemoryModal} variant="contained">
        Recall
      </Button>
      <MemoryTable />
      <CreateMemoryModal />
    </Box>
  );
}
