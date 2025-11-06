import { UserCircleIcon } from '@heroicons/react/24/solid';

interface UserPictureProps {
  src?: string;
  alt?: string;
}

export default function UserPicture(props: UserPictureProps) {
  return (
    <button
      className={`size-11 overflow-hidden rounded-full ring-1 ring-neutral-700 hover:not-disabled:cursor-pointer ${!props.src && 'hover:not-disabled:border-indigo-700 hover:not-disabled:bg-indigo-700 active:not-disabled:border-indigo-800 active:not-disabled:bg-indigo-800'}`}
    >
      <figure className="flex items-center justify-center">
        {props.src ? (
          <img src={props.src} alt={props.alt} />
        ) : (
          <UserCircleIcon className="size-10" />
        )}
      </figure>
    </button>
  );
}
