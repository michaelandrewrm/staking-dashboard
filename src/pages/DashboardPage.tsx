import DashboardLayout from '@layouts/DashboardLayout.tsx';
import { Outlet } from 'react-router';

export default function VDashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
