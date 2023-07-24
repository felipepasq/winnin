import React, { useState } from "react";
import * as S from "./styles";

interface ToggleButtonProps {
  initialIsOn: boolean;
  onToggle?: (isOn: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialIsOn = false,
  onToggle,
}) => {
  const [isOn, setIsOn] = useState(initialIsOn);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <S.ToggleButton isOn={isOn} onClick={handleToggle}>
      {isOn ? "Dark Mode" : "Light Mode"}
    </S.ToggleButton>
  );
};

export default ToggleButton;
