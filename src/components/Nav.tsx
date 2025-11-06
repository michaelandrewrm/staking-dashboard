import NavItem from '@components/NavItem';
import IconText from '@components/IconText';
import {
  PaperAirplaneIcon,
  Squares2X2Icon,
  WalletIcon,
} from '@heroicons/react/24/solid';
import type { INavItem } from '@/types';

const navItems: INavItem[] = [
  { name: 'Overview', icon: <Squares2X2Icon className="size-6" />, to: '/' },
  { name: 'Wallet', icon: <WalletIcon className="size-6" />, to: '/wallet' },
  {
    name: 'Transactions',
    icon: <PaperAirplaneIcon className="size-6" />,
    to: '/transactions',
  },
];

export default function Nav() {
  return (
    <nav className="flex w-full flex-col gap-2 p-4">
      <section>
        <IconText
          icon={<WalletIcon className="size-6" />}
          text="Multi-Chain Wallet"
        />
      </section>
      {navItems.map((props) => (
        <NavItem {...props} key={props.name}></NavItem>
      ))}
    </nav>
  );
}
