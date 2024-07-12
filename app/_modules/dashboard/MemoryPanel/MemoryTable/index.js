import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useMemories } from '@/hooks/dashboard/memoryHooks';

import memoryTableColumns from './memoryTableColumns';

export default function MemoryTable() {
  const { memories, isLoadingMemories, loadingMemoriesError } = useMemories();

  if (isLoadingMemories) return <div>Loading...</div>;
  if (loadingMemoriesError) return <div>Error!</div>;
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={memories}
        columns={memoryTableColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        getRowId={(row) => row._id}
      />
    </Box>
  );
}
