React Dashboard Assignment – React + TypeScript + Vite

A small 2-page React application built with modern tooling and best practices.
This project includes a static Login page and a Dashboard page that displays mock API data, a sortable & paginated table, and a chart visualization.


Tech Stack : -

- React 18 + TypeScript
- Vite (blazing-fast dev & build)
- Redux Toolkit + RTK Query (global state + data fetching)
- MUI (UI components)
- Recharts (chart visualization)
- React Router v6
- Jest (unit tests)
- ESLint (strict linting rules)


Getting Started : -

Install Dependencies:
- npm install

Run Dev Server:
- npm run dev

Run Tests:
- npm run test

Linting - Strict ESLint setup with TypeScript-aware rules.

Run linter:
- npm run lint

Build:
- npm run build

Login Credentials : - 

email: admin@test.com
password: admin

Base URL stored in config/appConfig.ts

Authentication Flow : -

- Static users are stored in config/users.json.
- Login is validated on the client.
- Token is stored in Redux + localStorage.
- Protected routes implemented using a wrapper component.

Features : - 

1. Login Page

- Basic UI
- Local validation against mock users
- Stores token in Redux & localStorage

2. Dashboard Page

- Fetches users from RTK Query (no Axios needed)
- Displays data in a MUI Table with:
- Sorting
- Pagination (custom hook-based)
- Chart added using Recharts

3. Unit Tests

- Test cases written for AuthSlice (login/logout)

