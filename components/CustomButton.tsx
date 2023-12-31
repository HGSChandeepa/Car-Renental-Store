// this is a client component because it uses the onclick
"use client";

import { CustumButtonProps } from "@/types";
import Image from "next/image";

export default function CustomButton({
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustumButtonProps) {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
}
