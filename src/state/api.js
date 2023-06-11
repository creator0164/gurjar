import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { domain } from '../data/constant';
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: domain,
        headers: {
            'Content-Type': 'application/json'
        }
    }),
    reducerPath: 'adminApi',
    tagType: [],
    endpoints: (builder) => ({
        getGurjarUsers: builder.query({
            query: ()=>'gurjar/users'
        }),
        // Get gurjar user using token
        getGurjarUser: builder.mutation({
            query: (token) => ({
                url: 'gurjar/get_user/',
                method: 'POST',
                body: {
                    token: token
                }
            })
        }),
        deleteGurjarUser: builder.mutation({
            query: (id) => ({
                url: `gurjar/gurjar_user/${id}`,
                method: 'DELETE'
            })
        }),
        updateGurjarUser: builder.mutation({
            query: (data) => ({
                url: `gurjar/gurjar_user/${data.id}/`,
                method: 'PUT',
                body: data.user
            })
        }),
        
    })
})

export const {
                useGetGurjarUsersQuery,
                useDeleteGurjarUserMutation,
                useUpdateGurjarUserMutation,
                useGetGurjarUserMutaion
            } = api;