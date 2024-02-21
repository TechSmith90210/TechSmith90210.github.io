import React from "react";
import { Typography, IconButton, Box, Button, Grid } from "@mui/material";
import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export const Contact = () => {
  return (
    <>
      <Box sx={{ p: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color="initial"
              sx={{
                mb: 1,
                fontSize:{xs:'2.3rem',sm:'2.5rem',md:'3rem',lg:'3.2rem'}
              }}
            >
              Want to work together?
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ mb: 1, fontSize: {xs:'1rem',sm:"1.3rem"}, }}
            >
              Feel free to reach out for collaborations or just a friendly hello
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
              sshaikhdev@gmail.com
            </Typography>
          </Grid>

          {/* Social media profiles */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Button
                variant="contained"
                color="success"
                size="small"
                href="mailto:sshaikhdev@gmail.com"
                sx={{
                  mr: 2,
                  fontSize: { xs: "0.6rem", sm: "0.8rem" },
                }}
              >
                Contact Me
              </Button>
              <IconButton
                variant="outlined"
                color="primary"
                size="large"
                href="https://www.linkedin.com/in/salman-shaikh-264555283/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mr: 2,
                  ":hover": { border: 1 },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                variant="outlined"
                color="primary"
                size="large"
                href="https://github.com/TechSmith90210"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mr: 2,
                  ":hover": { border: 1 },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                variant="outlined"
                color="primary"
                size="large"
                href="https://www.instagram.com/__sxlmxn__/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ":hover": { border: 1 },
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
