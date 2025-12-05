import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Box mt={4}>{children}</Box>
      </Container>
    </div>
  );
}
