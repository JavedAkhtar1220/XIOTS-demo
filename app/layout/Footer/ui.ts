import { Box, Button, styled } from "@mui/material";
import Link from "next/link";

export const StyledFooterWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.footer.background,
}));

export const StyledHeading = styled(Box)({
  fontSize: "1.5rem",
  color: "#fff",
  fontWeight: 700,
});

export const StyledLightText = styled(Box)(({ theme }) => ({
  color: theme.palette.texts.lightShade1,
  fontSize: "0.9rem",
  width: "300px",
}));

export const StyledSocialIconButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.borders.shade2}`,
  borderRadius: 0,
  padding: "1em",
  minWidth: "3em",
  minHeight: "3em",
  color: "#fff",
  "& svg": {
    fontSize: "1.2rem",
  },
}));

export const StlyedLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1em",
  padding: "0.6em 0",
  fontSize: "1rem",
  textDecoration: "none",
  "& svg": {
    color: theme.palette.texts.lightShade1,
    fontSize: "1rem",
  },
}));

export const StyledInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1em",
  padding: "0.6em 0",
  fontSize: "1rem",
  "& svg": {
    color: theme.palette.texts.lightShade1,
    fontSize: "1rem",
  },
}));

export const StyledCopywriteWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.footer.subBackground,
  padding: "2em 0",
}));
