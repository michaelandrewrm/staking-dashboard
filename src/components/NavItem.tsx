import type { INavItem } from '@/types';
import { NavLink } from 'react-router';

export default function NavItem(props: INavItem) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex justify-between rounded-lg border p-2 text-neutral-300 hover:not-disabled:cursor-pointer hover:not-disabled:border-indigo-700 hover:not-disabled:bg-indigo-700 active:not-disabled:border-indigo-800 active:not-disabled:bg-indigo-800 ${isActive ? 'border-indigo-900 bg-indigo-900' : 'border-neutral-700 bg-neutral-950'} `
      }
      to={props.to}
    >
      <span>{props.icon}</span>
      <span>{props.name}</span>
    </NavLink>
  );
}
