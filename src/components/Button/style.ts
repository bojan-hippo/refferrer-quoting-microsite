import { styled } from "@stitches/react";
import { COLORS } from "../../style/constants";

const Style = styled("button", {
  padding: "8px 16px",
  gap: "6px",
  border: "1px solid #F2F2F2",
  borderRadius: "20px",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center",
  textTransform: "uppercase",
  color: COLORS.DARK_GRAY,
  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    variant: {
      white: {
        background: COLORS.WHITE,
      },
      gray: {
        background: COLORS.GRAY,
        color: COLORS.WHITE,
      },
      orange: {
        background: COLORS.ORANGE,
        color: COLORS.WHITE,
      },
    },
  },
});

export default Style;
