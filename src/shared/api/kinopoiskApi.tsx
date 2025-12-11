import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrlApi = import.meta.env.VITE_API_BASE_URL;
const keyApi = import.meta.env.VITE_KINOPOISK_KEY;

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrlApi,
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json');
      headers.set('X-API-KEY', keyApi);
    },
  }),
  endpoints: builder => ({
    getTopMovies: builder.query({
      query: ({ type, page = 1 }) => `v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getAllMovies: builder.query({
      query: ({ keyword = '' }) => `v2.1/films/search-by-keyword?keyword=${keyword}&page=1`,
    }),
    getMovieById: builder.query({
      query: id => `v2.2/films/${id}`,
    }),
  }),
});

export const { useGetTopMoviesQuery, useGetAllMoviesQuery, useGetMovieByIdQuery } = kinopoiskApi;
