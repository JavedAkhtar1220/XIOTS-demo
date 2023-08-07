import { Box, styled } from "@mui/material";

export const FlexBetween = styled(Box)((gap) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ...(gap && {
    gap: `${gap}em`,
  }),
}));
