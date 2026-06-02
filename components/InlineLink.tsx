import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function InlineLink({ href, children, className = "" }: Props) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={
        "text-inherit underline-offset-[3px] decoration-1 " +
        "hover:text-accent hover:underline " +
        "focus-visible:text-accent focus-visible:underline " +
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent " +
        "focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
        "rounded-sm transition-colors duration-150 " +
        className
      }
    >
      {children}
    </a>
  );
}
