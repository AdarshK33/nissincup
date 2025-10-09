import "./CheckBox.scss";
import React from "react";

type CheckBoxProps = {
  id?: string;
  name: string;
  onBlur: () => void;
  onChange: (checked: boolean) => void;
  value?: string;
  checked?: boolean;
  className?: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  onChange,
  onBlur,
  id,
  value,
  checked,
  className,
}) => {
  return (
    <div className={`checkbox-wrapper-15 ${className}`}>
      <input
        checked={checked}
        className="inp-cbx"
        value={value}
        type="checkbox"
        autoComplete="off"
        style={{ display: "none" }}
        name={name}
        id={id}
        onChange={(e) => onChange(e.target.checked)}
        onBlur={onBlur}
      />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="20px" height="20px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
      </label>
    </div>
  );
};
export default CheckBox;
