import Nav from '@/components/Nav';
import Header from '@/components/Header';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-full w-full">
      <aside className="relative flex w-full max-w-80 shrink-0 flex-col bg-neutral-900">
        <Nav />
      </aside>
      <main className="relative h-full w-full">
        <Header />
        <section className="relative h-full w-full">{children}</section>
      </main>
    </div>
  );
}
