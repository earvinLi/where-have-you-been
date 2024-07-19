import AppLayout from '@/components/AppLayout';
import MemoryPanel from '@/modules/dashboard/MemoryPanel';

export default function Home() {
  return (
    <AppLayout>
      <MemoryPanel />
    </AppLayout>
  );
}
