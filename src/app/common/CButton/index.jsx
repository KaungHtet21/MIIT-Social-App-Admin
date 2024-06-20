import { Button } from "antd";
import React from "react";

const CButton = ({ type, icon, size, color, shape, text, style}) => {
  return (
    <Button
      type={type}
      icon={icon}
      size={size}
      color={color}
      shape={shape}
      style={style}
    >{text}</Button>
  );
};

export default CButton;
