import type { INavItem } from '@/types';
import { NavLink } from 'react-router';

export default function NavItem(props: INavItem) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex justify-between rounded-lg border p-2 text-white hover:cursor-pointer hover:border-indigo-900 hover:bg-indigo-800 active:border-indigo-950 active:bg-indigo-900 ${isActive ? 'border-indigo-950 bg-indigo-900' : 'border-neutral-700 bg-neutral-950'} `
      }
      to={props.to}
    >
      <span>{props.icon}</span>
      <span>{props.name}</span>
    </NavLink>
  );
}
