import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const SkillItem = ({ title, imageUrl }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        // border: 1,
      }}
    >
      <Container
        sx={{
          height: {xs:80,md:105} ,
          width: {xs:80,md:120} ,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Container>
      <Typography variant="h6" color="textSecondary" sx={{ mt: 1 }}>
        {title}
      </Typography>
    </Container>
  );
};

export const Skills = () => {
  const skillsFrameworks = [
    { title: "Flutter", imageUrl: "/flutterlogo.png" },
    { title: "Firebase", imageUrl: "/firebase_logo.png" },
    { title: "Kotlin", imageUrl: "/Kotlin_Icon.png" },
    { title: "React Native", imageUrl: "/React-icon.svg.png" },
    { title: "Javascript", imageUrl: "/JavaScript-logo.png" },
    { title: "HTML & CSS", imageUrl: "/html&csslogo.jpg" },
    { title: "Java", imageUrl: "/java-logo.png" },
  ];

  return (
    <>
      <Container sx={{ p: 5, mb: 6 }}>
        <Typography
          variant="h2"
          color="initial"
          sx={{
            mb: 4,
            fontSize: { xs: "2.3rem", sm: "2.5rem", md: "3rem", lg: "3.2rem" },
          }}
        >
          Skills
        </Typography>
        <Grid container spacing={1} >
          {skillsFrameworks.map((skill, index) => (
            <Grid item key={index} xs={6} md={2}>
              <SkillItem title={skill.title} imageUrl={skill.imageUrl} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
