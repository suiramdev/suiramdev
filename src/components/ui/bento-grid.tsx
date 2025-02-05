import { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  className?: string;
  header?: ReactNode;
  Icon?: React.ElementType;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  title,
  description,
  className,
  header,
  Icon,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "group/bento shadow-input bg-card row-span-1 flex flex-col justify-between space-y-4 border p-4 transition duration-200 hover:shadow-xl dark:shadow-none",
      className,
    )}
    {...props}
  >
    {header}
    <div className="transition duration-200 group-hover/bento:translate-x-2">
      {Icon && (
        <Icon className="text-muted-foreground h-4 w-4 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
      )}
      <div className="text-card-foreground mt-2 mb-2 font-sans font-bold">
        {title}
      </div>
      <div className="text-muted-foreground font-sans text-sm font-normal">
        {description}
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
