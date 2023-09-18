"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Props {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "right" | "left";
  align?: "start" | "center" | "end";
}

export default function ActionTooltip({ label, children, side, align }: Props) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipContent
          side={side}
          align={align}
          className=" bg-white dark:bg-black border-0"
        >
          <p className=" font-semibold text-sm capitalize">
            {label.toLocaleLowerCase()}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
