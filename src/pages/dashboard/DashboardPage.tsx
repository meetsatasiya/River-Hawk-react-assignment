import { Box, Typography } from '@mui/material';
import React from 'react';
import { useGetUsersQuery } from '../../api/UsersApi';

const DashboardPage: React.FC = () => {
    const { data: users, isLoading, error } = useGetUsersQuery();

    console.log("data", users)
    console.log("isLoading", isLoading)
    console.log("error", error)
  return (
    <Box sx={{ padding: 4 }}>
     <Typography variant='h4'>Welcome to Dashboard</Typography>
    </Box>
  );
};

export default DashboardPage;
