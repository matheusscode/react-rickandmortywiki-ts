import { ReactNode } from "react";

export type AccordionProps = {
  title: string;
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
};
