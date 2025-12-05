import { render, screen } from "@testing-library/react";
import UsersTable from "../../components/table/UsersTable";
import type { DashboardUser } from "../../types/DashboardUser";

const mockUsers: DashboardUser[] = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
];

describe("UsersTable component", () => {
  test("renders correctly and matches snapshot", () => {
    const { container } = render(<UsersTable users={mockUsers} />);
    expect(container).toMatchSnapshot();
  });

  test("renders empty table correctly", () => {
    const { container } = render(<UsersTable users={[]} />);
    expect(container).toMatchSnapshot();
  });

  test("renders correct number of rows", () => {
    render(<UsersTable users={mockUsers} />);
    const rows = screen.getAllByRole("row"); // includes header row
    expect(rows).toHaveLength(mockUsers.length + 1);
  });
});
