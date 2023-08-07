import React, { FC } from "react";
import {
  StyleHeaderWrapper,
  StyledContainer,
  StyledIconWrapper,
  StyledLogo,
  StyledNavigationWrapper,
  StyledPhoneHandingWrapper,
  StyledPhoneIconWrapper,
  StyledText,
} from "./ui";
import { SVG_ICONS } from "@/app/assets";
import { Box, Container } from "@mui/material";
import { FlexBetween } from "@/app/styles/style";
import Link from "next/link";

const Header: FC = () => {
  return (
    <StyledContainer>
      <StyleHeaderWrapper>
        <Container maxWidth="xl">
          <FlexBetween>
            <StyledLogo>Logo</StyledLogo>
            <Box>
              <FlexBetween gap={6}>
                <FlexBetween gap={1}>
                  <StyledIconWrapper>
                    <SVG_ICONS.Home />
                  </StyledIconWrapper>
                  <Box>
                    <StyledText primary="true">Address</StyledText>
                    <StyledText>Shipley Central, England</StyledText>
                  </Box>
                </FlexBetween>
                <FlexBetween gap={1}>
                  <StyledIconWrapper>
                    <SVG_ICONS.Email />
                  </StyledIconWrapper>
                  <Box>
                    <StyledText primary="true">Email Us</StyledText>
                    <StyledText>example@booking.com</StyledText>
                  </Box>
                </FlexBetween>
                <FlexBetween gap={1}>
                  <StyledPhoneHandingWrapper>
                    <StyledPhoneIconWrapper>
                      <SVG_ICONS.Phone />
                    </StyledPhoneIconWrapper>
                  </StyledPhoneHandingWrapper>
                  <Box sx={{ ml: "5.5em" }}>
                    <StyledText secondary="true">+1-234-000-2345</StyledText>
                  </Box>
                </FlexBetween>
              </FlexBetween>
            </Box>
          </FlexBetween>
        </Container>
      </StyleHeaderWrapper>
      <StyledNavigationWrapper>
        <Container maxWidth="xl">
          <Link href="/">Home</Link>
          <Link href="/">Posts</Link>
        </Container>
      </StyledNavigationWrapper>
    </StyledContainer>
  );
};

export default Header;
