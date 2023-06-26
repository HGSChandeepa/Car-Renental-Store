import { MouseEventHandler } from "react";

export interface CustumButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
