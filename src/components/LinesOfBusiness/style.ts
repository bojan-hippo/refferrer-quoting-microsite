import { styled } from "@stitches/react";
import { COLORS } from "../../style/constants";

export const Wrapper = styled("div", {
  display: "flex",
});

export const Item = styled("div", {
  boxSizing: "border-box",
  alignitems: "center",
  background: COLORS.WHITE,
  padding: "3px 12px",
  marginRight: "6px",
  border: "1px solid #E0E0E0",
  borderRadius: "16px",
  fontWeight: "600",
  fontSize: "11px",
  lineHeight: "16px",
  textAlign: "center",
  color: COLORS.DARK_GRAY,
});
