import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email,
}) => (
  <div>
    <h1>Name: {firstName}!</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
