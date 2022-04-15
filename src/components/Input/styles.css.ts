import { style } from "@vanilla-extract/css";
import { vars } from "@styles/var.css";

const { colors } = vars;

export const styInputWrapper = style({
  display: "flex",
  fontSize: "14px",
  width: "100%",
});

export const styTextInput = style({
  color: colors.black,
  lineHeight: 1.5715,
  borderRadius: "2px",
  border: `1px solid ${colors.smoke}`,
  padding: "4px 11px",
  outline: "none",
});

export const styAddsOnButton = style({
  outline: "none",
  cursor: "pointer",
  height: "32px",
  fontSize: "14px",
  border: `1px solid ${colors.primary}`,
  backgroundColor: colors.primary,
  borderRadius: "0 2px 2px 0",
  boxShadow: "0 2px #0000000b",
  textShadow: "0 -1px 0 rgb(0 0 0 / 12%)",
  color: colors.white,
  padding: "4px 15px",
});

export const styAddsOnIcon = style({
  lineHeight: "1",
});
