interface IconButtonProps {
  icon: React.ReactElement;
  text?: string;
  className?: string;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg border border-neutral-700 p-2 hover:not-disabled:cursor-pointer hover:not-disabled:border-indigo-700 hover:not-disabled:bg-indigo-700 active:not-disabled:border-indigo-800 active:not-disabled:bg-indigo-800 ${props.className || ''}`}
    >
      <span>{props.icon}</span>
      {props.text && <span>{props.text}</span>}
    </button>
  );
}
