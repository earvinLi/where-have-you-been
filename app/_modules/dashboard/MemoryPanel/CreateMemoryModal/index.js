'use client';

import { Controller } from 'react-hook-form';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

import useCreateMemoryForm, {
  CreateMemoryFormInputs,
} from '@/hooks/dashboard/useCreateMemoryForm';
import { useSharedCreateMemoryModal } from '@/hooks/modalHooks';

export default function CreateMemoryModal() {
  const { createMemoryModalIsOpen, closeCreateMemoryModal } =
    useSharedCreateMemoryModal();

  const {
    createMemoryFormHandleSubmit,
    createMemoryFormControl,
    createMemoryFormReset,
  } = useCreateMemoryForm();

  const handleCreateMemory = (
    dataToCreateMemory,
  ) => console.log(dataToCreateMemory);

  return (
    <Dialog open={createMemoryModalIsOpen} onClose={closeCreateMemoryModal}>
      <DialogTitle>Recall a memory</DialogTitle>
      <DialogContent>
        <DialogContentText>To recall a memory...</DialogContentText>
        <Controller
          name="memoryName"
          control={createMemoryFormControl}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Memory name"
              fullWidth
              margin="normal"
              variant="standard"
              {...field}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeCreateMemoryModal}>Cancel</Button>
        <Button onClick={createMemoryFormHandleSubmit(handleCreateMemory)}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
