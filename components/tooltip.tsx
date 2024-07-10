import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type Props = {
  children: React.ReactNode;
  content: string;
};

export const Tooltip = ({ children, content }: Props) => {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side="bottom"
          align="center"
          className="bg-neutral-500 text-xs p-1 rounded-sm text-neutral-100"
        >
          {content}
          <TooltipPrimitive.Arrow />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};
