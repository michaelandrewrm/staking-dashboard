import {
  MagnifyingGlassCircleIcon,
  MoonIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import Search from '@components/Search';
import IconButton from '@components/IconButton';
import UserPicture from '@/components/UserPicture';

export default function Header() {
  return (
    <header className="relative flex h-20 w-full justify-between border-b border-l border-neutral-700 bg-neutral-900 p-4">
      <Search
        icon={<MagnifyingGlassCircleIcon className="size-6 text-inherit" />}
      />
      <div className="flex items-center gap-4">
        <IconButton icon={<MoonIcon className="size-6" />} text="Theme" />
        <IconButton icon={<PlusIcon className="size-6" />} text="New" />
        <UserPicture
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
          alt="User"
        />
      </div>
    </header>
  );
}
