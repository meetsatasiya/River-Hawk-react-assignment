import React, { useMemo } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography, TableSortLabel, TablePagination
} from "@mui/material";

import { useTableSort } from "./useTableSort";
import { usePagination } from "../../hooks/usePagination";
import type { DashboardUser } from "../../types/DashboardUser";

interface UsersTableProps {
  users: DashboardUser[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  const { order, orderBy, toggle } = useTableSort<DashboardUser>("id");

 
  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => {
      const valA = a[orderBy];
      const valB = b[orderBy];

      if (typeof valA === "number" && typeof valB === "number") {
        return order === "asc" ? valA - valB : valB - valA;
      }

      return order === "asc"
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }, [users, order, orderBy]);


  const {
    paginatedData,
    page,
    rowsPerPage,
    setPage,
    total,
  } = usePagination(sortedUsers, 5);

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Users List
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sortDirection={orderBy === "id" ? order : false}>
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={order}
                  onClick={() => toggle("id")}
                >
                  <strong>ID</strong>
                </TableSortLabel>
              </TableCell>

              <TableCell sortDirection={orderBy === "name" ? order : false}>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={order}
                  onClick={() => toggle("name")}
                >
                  <strong>Name</strong>
                </TableSortLabel>
              </TableCell>

              <TableCell sortDirection={orderBy === "email" ? order : false}>
                <TableSortLabel
                  active={orderBy === "email"}
                  direction={order}
                  onClick={() => toggle("email")}
                >
                  <strong>Email</strong>
                </TableSortLabel>
              </TableCell>

              <TableCell sortDirection={orderBy === "role" ? order : false}>
                <TableSortLabel
                  active={orderBy === "role"}
                  direction={order}
                  onClick={() => toggle("role")}
                >
                  <strong>Role</strong>
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </Paper>
  );
};

export default UsersTable;
