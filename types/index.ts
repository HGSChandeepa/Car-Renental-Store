import { MouseEventHandler } from "react";

export interface CustumButtonProps {
  title: string;
  containerStyle?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
