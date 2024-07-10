import * as Tabs from "@radix-ui/react-tabs";

type Props = {
  title: string;
  value: string;
};

export const TabTrigger = ({ title, value }: Props) => {
  return (
    <Tabs.Trigger
      value={value}
      className="p-3 group bg-black hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out"
    >
      <span className="p-3 group-data-[state='active']:border-b-4 group-data-[state='active']:border-sky-500 text-neutral-500 font-semibold group-data-[state='active']:text-neutral-100 text-sm">
        {title}
      </span>
    </Tabs.Trigger>
  );
};
