import { render } from "@testing-library/react";
import UsersChart from "../../components/charts/UsersChart";
import type { User } from "../../types/User";

const mockUsers: User[] = [
  { id: 1, name: "Alice Smith", username: "alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Johnson", username: "bob", email: "bob@example.com", role: "User"},
  { id: 3, name: "Charlie Brown", username: "charlie", email: "charlie@example.com", role: "User" },
];

describe("UsersChart component", () => {
  test("renders correctly and matches snapshot", () => {
    const { container } = render(<UsersChart users={mockUsers} />);
    expect(container).toMatchSnapshot();
  });

  test("renders null if users array is empty", () => {
    const { container } = render(<UsersChart users={[]} />);
    expect(container).toMatchSnapshot();
  });
});
