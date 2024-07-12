import useSWR from 'swr';

import fetcher from '@/utils/apiRequestUtils/fetcher';
import { createMemoryUrl, fetchMemoriesUrl } from '@/constants/apiConstants';

export const requestToCreateMemory = async (dataToCreateMemory) => {
  await fetch(createMemoryUrl, {
    method: 'POST',
    body: JSON.stringify(dataToCreateMemory),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const useMemories = () => {
  const { data, error, isLoading } = useSWR(fetchMemoriesUrl, fetcher);

  return {
    memories: data,
    isLoadingMemories: isLoading,
    loadingMemoriesError: error,
  };
};
