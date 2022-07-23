import React, { ChangeEventHandler } from "react";
import { CheckBox, Slider, ToggleLabel } from "./Toggle.styled";
// Tutorial: https://www.youtube.com/watch?v=1W3mAtAT7os
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
