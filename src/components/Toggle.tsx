import React, { ChangeEventHandler } from "react";
import { CheckBox, Slider, ToggleLabel } from "./Toggle.styled";

interface IProps {
  onChange: ChangeEventHandler;
}

const Toggle = ({ onChange }: IProps) => {
  return (
    <ToggleLabel>
      <CheckBox type="checkbox" onChange={onChange} />
      <Slider />
    </ToggleLabel>
  );
};

export default Toggle;
