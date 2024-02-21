import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ProjectContainer = ({ link, image, title }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Container
          sx={{
            position: "relative",
            backgroundColor: "slategrey",
            height: 300,
            width: 350,
            borderRadius: 4,
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            overflow: "hidden",
            transition: "0.3s",
            "&:hover": {
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark overlay
                zIndex: 1,
              },
              "& > *": {
                opacity: 1,
                zIndex: 2,
              },
            },
          }}
        >
          <Typography
            variant="h4"
            color="white"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              opacity: 0,
              zIndex: 0,
              transition: "0.3s",
            }}
          >
            {title}
          </Typography>
        </Container>
      </a>
    </Grid>
  );
};

export const Work = () => {
  const projects = [
    {
      link: "",
      image: "/work1.png",
      title: "Quiz System",
    },
    {
      link: "",
      image: "/Picture2.jpg",
      title: "Football Web App",
    },
    {
      link: "",
      image: "/work3.png",
      title: "Real Estate Web App",
    },
  ];

  return (
    <>
      <Container sx={{mb:7}}>
        <Typography
          variant="h2"
          color="initial"
          sx={{
            mb: 4,
            fontSize: { xs: "2.3rem", sm: "2.5rem", md: "3rem", lg: "3.2rem" },
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <ProjectContainer
              key={index}
              link={project.link}
              image={project.image}
              title={project.title}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Work;
