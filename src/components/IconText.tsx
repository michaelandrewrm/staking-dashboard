export default function IconText(props: {
  icon: React.ReactElement;
  text: string;
}) {
  return (
    <div className="flex gap-2 p-2">
      <span className="">{props.icon}</span>
      <span className="">{props.text}</span>
    </div>
  );
}
