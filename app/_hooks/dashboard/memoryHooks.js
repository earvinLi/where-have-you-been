import useSWR from 'swr';

import fetcher from '@/utils/apiRequestUtils/fetcher';
import { createMemoryUrl, fetchMemoriesUrl } from '@/constants/apiConstants';

const requestToCreateMemory = async (dataToCreateMemory, mutateMemories) => {
  const createdMemory = await fetcher(createMemoryUrl, {
    method: 'POST',
    body: JSON.stringify(dataToCreateMemory),
    headers: { 'Content-Type': 'application/json' },
  });

  mutateMemories((existingMemories) => [createdMemory.data, ...existingMemories]);
};

const useMemories = () => {
  const { data, error, isLoading, mutate: mutateMemories } = useSWR(fetchMemoriesUrl, fetcher);

  return {
    memories: data,
    isLoadingMemories: isLoading,
    loadingMemoriesError: error,
    requestToCreateMemory: (dataToCreateMemory) => requestToCreateMemory(dataToCreateMemory, mutateMemories),
  };
};

export default useMemories;
