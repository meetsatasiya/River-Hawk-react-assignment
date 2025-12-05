import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import { useGetUsersQuery } from "../../api/UsersApi";
import UsersTable from "../../components/table/UsersTable";
import UsersChart from "../../components/charts/UsersChart";

const DashboardPage: React.FC = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading)
    return (
      <Box sx={{ margin: "auto", display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Typography
        color="error"
        sx={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        Error loading users
      </Typography>
    );

  const usersWithRole = users?.map((user, i) => ({
    ...user,
    role: i % 2 === 0 ? "Admin" : "User",
  }));

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <UsersChart users={usersWithRole || []} />
        </Grid>
        <Grid item xs={12} md={6}>
          <UsersTable users={usersWithRole || []} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
