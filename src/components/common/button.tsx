import React, { MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ButtonName: string;
  dataBsDismiss?: string;
  ariaLabel?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  type = "button",
  onClick,
  ButtonName,
  dataBsDismiss,
  ariaLabel,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      data-bs-dismiss={dataBsDismiss}
      aria-label={ariaLabel}
    >
      {ButtonName}
    </button>
  );
};

export default ButtonComponent;
