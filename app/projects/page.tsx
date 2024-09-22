import ProjectsComponent from "@/components/component/projects";
import Container from "@/components/Container";
import React from "react";

export default function Projects() {
  return (
    <Container>
      <main className="flex flex-col items-start justify-evenly md:flex-row">
        <ProjectsComponent />
      </main>
    </Container>
  );
}
