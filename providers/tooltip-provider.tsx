import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export const TooltipProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <TooltipPrimitive.Provider>{children}</TooltipPrimitive.Provider>;
};
