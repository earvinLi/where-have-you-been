import AppLayout from '@/components/AppLayout';
import MemoryPanel from '@/modules/dashboard/MemoryPanel';

export default function Dashboard() {
  return (
    <AppLayout>
      <MemoryPanel />
    </AppLayout>
  );
}
