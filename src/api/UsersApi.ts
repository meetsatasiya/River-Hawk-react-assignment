import { BaseApi } from "./BaseApi";
import type { User } from "../types/User";

export const UsersApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",

      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetUsersQuery } = UsersApi;
