import { Typography, Box, Container, Grid } from "@mui/material";
export const About = () => {
  return (
    <>
      <Box
        sx={{
          p: 5,
          mb:5
        }}
      >
        <Typography variant="h2" color="initial" sx={{
          fontSize:{xs:'2.3rem',sm:'2.5rem',md:'3rem',lg:'3.2rem'}
        }}>
          About Me
        </Typography>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} sm={12} md={9}>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ fontSize: {xs:'1.2rem',sm:"1.3rem"}, mt: 1 }}
            >
              A passionate App Developer based in India. I love coding and
              designing and enjoy listening to music. My dream is to create
              something I am proud of. Let's connect and explore new
              opportunities together!
            </Typography>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={6} sx={{ mb: 10 }}>
            <img src="/svg1.svg" alt="" width={400} />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};
