'use client'

import { useState } from 'react';
import { useBetween } from 'use-between';

const useCreateMemoryModal = () => {
  const [createMemoryModalIsOpen, setCreateMemoryModalIsOpen] = useState(false);

  return {
    createMemoryModalIsOpen,
    openCreateMemoryModal: () => setCreateMemoryModalIsOpen(true),
    closeCreateMemoryModal: () => setCreateMemoryModalIsOpen(false),
  };
};

export const useSharedCreateMemoryModal = () => useBetween(useCreateMemoryModal);
