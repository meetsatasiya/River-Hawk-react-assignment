import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useGetUsersQuery } from "../../api/UsersApi";
import UsersTable from "../../components/table/UsersTable";

const DashboardPage: React.FC = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <Box sx={{margin:'auto', display:'flex', justifyContent:'center'}}><CircularProgress /></Box>;
  if (error) return <Typography color="error" sx={{margin:'auto', display:'flex', justifyContent:'center'}}>Error loading users</Typography>;

  const usersWithRole = users?.map((user, i) => ({
    ...user,
    role: i % 2 === 0 ? "Admin" : "User",
  }));

  return (
    <Box sx={{ padding: 4 }}>
      <UsersTable users={usersWithRole || []} />
    </Box>
  );
};

export default DashboardPage;
