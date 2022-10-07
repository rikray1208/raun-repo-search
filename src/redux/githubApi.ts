import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IGitUser, RepoResponse, ResponseInterface} from "../models/gitHubModels";

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    refetchOnFocus: true,
    endpoints: (builder) => ({
        searchUser: builder.query<IGitUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: ResponseInterface<IGitUser>) => response.items
        }),
        fetchRepo: builder.query<RepoResponse[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    })
})

export const { useSearchUserQuery, useLazyFetchRepoQuery } = githubApi;