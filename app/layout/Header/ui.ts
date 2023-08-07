import { Box, Typography, styled } from "@mui/material";

interface StyledTextProps {
  primary?: string;
  secondary?: string;
}

export const StyledContainer = styled(Box)({
  position: "sticky",
  top: 0,
  left: 0,
});

export const StyleHeaderWrapper = styled(Box)(({ theme }) => ({
  padding: "2em 0",
}));

export const StyledLogo = styled(Typography)(({ theme }) => ({
  fontSize: "2.2rem",
  fontWeight: 800,
  fontStyle: "italic",
  color: theme.palette.texts.logo,
}));

export const StyledText = styled(Typography)<StyledTextProps>(
  ({ theme, primary, secondary }) => ({
    fontSize: primary || secondary ? "1.1rem" : "0.9rem",
    color: primary
      ? theme.palette.texts.shade2
      : secondary
      ? theme.palette.texts.shade3
      : theme.palette.texts.shade1,
    fontWeight: primary ? 600 : 400,
  })
);

export const StyledIconWrapper = styled(Box)(({ theme }) => ({
  padding: "0.8em",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& svg": {
    color: theme.palette.primary.main,
    fontSize: "1.8em",
  },
}));

export const StyledPhoneHandingWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  height: "6em",
  borderRadius: "0 0 2.2em 2.2em",
  padding: "0.6em",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  backgroundColor: theme.palette.backgrounds.shade1,
}));

export const StyledPhoneIconWrapper = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.borders.shade1}`,
  background: theme.palette.backgrounds.shade2,
  borderRadius: "50%",
  padding: "0.6em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& svg": {
    color: "#fff",
    fontSize: "1.8em",
  },
}));

export const StyledNavigationWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.backgrounds.shade3,
  padding: "1em 0",
}));
