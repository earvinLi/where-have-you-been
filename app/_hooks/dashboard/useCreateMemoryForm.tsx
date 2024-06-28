'use client';

import { useForm } from 'react-hook-form';

export interface CreateMemoryFormInputs {
  memoryName: string;
}

const useCreateMemoryForm = () => {
  const { handleSubmit, control, reset } = useForm<CreateMemoryFormInputs>({
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
