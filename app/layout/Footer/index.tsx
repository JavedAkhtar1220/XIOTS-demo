import React from "react";
import {
  StlyedLink,
  StyledCopywriteWrapper,
  StyledFooterWrapper,
  StyledHeading,
  StyledInfoWrapper,
  StyledLightText,
  StyledSocialIconButton,
} from "./ui";
import { Box, Container, Grid } from "@mui/material";
import { SVG_ICONS } from "@/app/assets";
import { contact_info, quick_links, social_links } from "./mockData";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <Container maxWidth="xl" sx={{ my: "4em" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <StyledHeading>Logo</StyledHeading>
            <StyledLightText sx={{ my: "1em" }}>
              Search for will uncover many web sites variables onto of passages
              of lorem ipsum available but the majority the words all predefined
              humour to met chunks recently with desktop.
            </StyledLightText>
            <Box sx={{ display: "flex", gap: "1em" }}>
              {social_links.map(({ id, icon: Icon }) => (
                <StyledSocialIconButton key={id}>
                  <Icon />
                </StyledSocialIconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledHeading>Quick Links</StyledHeading>
            <Box sx={{ my: "1em" }}>
              {quick_links.map((val) => (
                <StlyedLink href={val.href} key={val.id}>
                  <SVG_ICONS.File />
                  <StyledLightText>{val.label}</StyledLightText>
                </StlyedLink>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledHeading>Contact Info</StyledHeading>
            <Box sx={{ my: "1em" }}>
              {contact_info.map(({ icon: ICON, ...val }) => (
                <StyledInfoWrapper key={val.id}>
                  <ICON />
                  <StyledLightText>{val.label}</StyledLightText>
                </StyledInfoWrapper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <StyledCopywriteWrapper>
        <Container maxWidth="xl">
          <StyledLightText>
            © Copyrights 2023 Logo. All Rights Reserved
          </StyledLightText>
        </Container>
      </StyledCopywriteWrapper>
    </StyledFooterWrapper>
  );
};

export default Footer;
