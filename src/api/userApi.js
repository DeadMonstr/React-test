// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
//
//
// export const apiSLice = createApi({
//     reducerPath: "user",
//     baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
//     tagTypes: ["User"],
//     endpoints: builder => ({
//         getUser: builder.query({
//             query: () => "/login",
//             providesTags: ['Heroes']
//         }),
//         createUser: builder.mutation({
//             query: hero => ({
//                 url: '/register',
//                 method: "POST",
//                 body: hero
//             }),
//             invalidatesTags: ['Heroes']
//         }),
//         deleteUser: builder.mutation({
//             query: id => ({
//                 url: `/heroes/${id}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ['Heroes']
//         })
//     })
// })
//
// export const {
//     useGetHeroesQuery,
//     useCreateHeroMutation,
//     useDeleteHeroMutation
// } = apiSLice