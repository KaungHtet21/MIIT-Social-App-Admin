import { Input, Typography } from "antd";
import { COLORS, FONTS } from "../../../theme/theme";

const FormInput = ({ title, placeholder, style, type }) => {
  return (
    <div style={style}>
      <Typography style={{ ...FONTS.h3, color: COLORS.title }}>
        {title}
      </Typography>
      <Input placeholder={placeholder} style={{...FONTS.h2}} type={type}  />
    </div>
  );
};

export default FormInput;
