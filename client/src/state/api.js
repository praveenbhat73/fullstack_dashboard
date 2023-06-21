import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
   
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
        query: () => "client/products",
        providesTags: ["Products"],
      }),
      getCustomers: build.query({
        query: () => "client/customers",
        providesTags: ["Customers"],
      }),
      getTransactions: build.query({
        query: ({ page, pageSize, sort, search }) => ({
          url: "client/transactions",
          method: "GET",
          params: { page, pageSize, sort, search },
        }),
        providesTags: ["Transactions"],
      }),
   
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
} = api;

//redux toolkit is used inorder to set url path
//backend url is taken and set the baserurl to that
//now user -> http://localhost/5001/general/user/${id} so to call the function that is executing in this url 
//endpoints are set using build querys and tagtypes tell different type of endpoints 
//when client connects to frontend server and call the reducer function or dispatches the function which is reducerpath
//the above url are called and backend part is executed 