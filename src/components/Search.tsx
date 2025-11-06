interface SearchProps {
  label?: string;
  icon?: React.ReactElement;
}

export default function Search(props: SearchProps) {
  return (
    <form className="w-full max-w-80">
      <label
        htmlFor="search-input"
        className="group relative grid w-full grid-cols-[fit-content(24px)_1fr] gap-1 rounded-lg border border-neutral-700 p-2 text-neutral-300 hover:not-disabled:border-indigo-700 has-focus-visible:border-indigo-900"
      >
        {props.label && <span>{props.label}</span>}
        {props.icon && (
          <span className="group-has-focus-visible:text-indigo-900 group-has-[:hover]:text-indigo-700">
            {props.icon}
          </span>
        )}
        <input
          id="search-input"
          type="text"
          className="border-0 focus-visible:outline-0"
          placeholder="Search tokens, address..."
        />
      </label>
    </form>
  );
}
