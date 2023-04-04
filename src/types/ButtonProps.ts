import { ReactNode } from "react";

export type ButtonProps = {
  type?: string;
  event: (e: any) => void;
  style: string;
  children?: ReactNode;
};
