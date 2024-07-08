'use client';

import { useForm } from 'react-hook-form';

const useCreateMemoryForm = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      memoryName: '',
    },
  });

  return {
    createMemoryFormHandleSubmit: handleSubmit,
    createMemoryFormControl: control,
    createMemoryFormReset: reset,
  };
};

export default useCreateMemoryForm;
