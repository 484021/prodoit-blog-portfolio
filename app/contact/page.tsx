import { ContactForm } from "@/components/component/contact-form";
import Container from "@/components/Container";
import React from "react";

export default function Contact() {
  return (
    <Container>
      <main className="flex flex-col items-start justify-evenly mt-auto md:flex-row">
        <ContactForm />
      </main>
    </Container>
  );
}
