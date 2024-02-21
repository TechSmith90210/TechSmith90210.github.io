import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const Qualifications = () => {
  return (
    <>
      <Container sx={{ mb: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color="initial"
              sx={{
                mb: 2,
                fontSize: {
                  xs: "2.3rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.2rem",
                },
              }}
            >
              Certifications
            </Typography>
          </Grid>
          <Grid item>
            <a href="" style={{ textDecoration: "none" }}>
              <Container
                sx={{
                  height: 150,
                  width: 150,
                  background: `url(/aws_logo.png)`,
                  backgroundSize: "cover",
                }}
              ></Container>
              <Typography variant="h6" color="initial" sx={{ mt: 1 }}>
                AWS Academy Cloud Operations
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
