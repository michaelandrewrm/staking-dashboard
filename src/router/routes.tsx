import type { RouteObject } from 'react-router';
import DashboardPage from '@/pages/DashboardPage.tsx';
import OverviewPage from '@/pages/OverviewPage';
import WalletPage from '@/pages/WalletPage';
import TransactionsPage from '@/pages/TransactionsPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardPage />,
    children: [
      { index: true, Component: OverviewPage },
      { path: 'wallet', Component: WalletPage },
      { path: 'transactions', Component: TransactionsPage },
    ],
  },
];
