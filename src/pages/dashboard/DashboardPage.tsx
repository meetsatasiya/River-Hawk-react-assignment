import { Box, Grid} from "@mui/material";
import React from "react";
import { useGetUsersQuery } from "../../api/UsersApi";
import UsersTable from "../../components/table/UsersTable";
import UsersChart from "../../components/charts/UsersChart";
import Loader from "../../components/common/Loader";
import ErrorMessage from "../../components/common/ErrorMessage";

const DashboardPage: React.FC = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  const usersWithRole = users?.map((user, i) => ({
    ...user,
    role: i % 2 === 0 ? "Admin" : "User",
  }));

  if (isLoading)
    return (
      <Loader />
    );
    
  if (error){    
    return (
     <ErrorMessage message="Failed to load data" />
    );
  } 

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
