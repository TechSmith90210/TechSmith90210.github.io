import { Grid, Box, Typography, Container } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import resume from "/Salman_s_Resume.pdf"; // Update the path based on your project structure

export const Hero = () => {
  return (
    <>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.3rem", md: "3.5rem" },
                textAlign: { xs: "center", sm: "left", md: "left" },
              }}
            >
              Hi,
              <br /> I'm <span style={{ fontWeight: 500 }}>Salman Shaikh</span>
              <br />
              <span
                style={{
                  fontWeight: 300,
                  color: "green",
                  fontSize: { xs: "1rem", sm: "2rem", md: "1rem" },
                }}
              >
                <small>Android App Developer</small>
              </span>
            </Typography>
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "left", md: "left" },
                mb: { xs: "1rem", md: "0" },
              }}
            >
              <Button variant="contained" color="success" sx={{ mr: 2 }}>
                View my Works
              </Button>
              <DownloadResumeButton />
              <Button variant="outlined" color="success">
                Contact Me
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Container
              sx={{
                backgroundImage: "url(/imgsmall.png)",
                width: { xs: 300, sm: 270, md: 430, lg: 550 },
                height: { xs: 300, sm: 270, md: 400, lg: 480 },
                backgroundSize: { xs: "cover" },
                backgroundPosition: "bottom",
                borderRadius: 2,
                p: 2,
              }}
            ></Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = resume;
    a.download = "Salman_Shaikh_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Button
      color="success"
      variant="outlined"
      onClick={handleDownload}
      sx={{ mr: 2 }}
    >
      Download Resume
    </Button>
  );
};
