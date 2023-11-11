"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ title, containerStyles, handleClick }: ButtonProps) => {
  return (
    <button
      className={`custom-button ${containerStyles}`}
      disabled={false}
      type={"button"}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default Button;
