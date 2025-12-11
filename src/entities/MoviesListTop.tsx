import { Grid, Pagination, Stack } from '@mui/material';
import { useGetTopMoviesQuery } from '../shared/api/kinopoiskApi';
import type { IFilm } from '../app/models';
import MovieCard from './MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';
import { CATEGORIES } from '../app/constans';
import { useState } from 'react';

function MoviesListTop() {
  const location = useLocation();
  const currentCategory = CATEGORIES.find(el => el.url === location.pathname);
  const currentMovieType = currentCategory ? currentCategory.value : null;

  const [page, setPage] = useState(1);
  const [prevPathname, setPrevPathname] = useState(location.pathname); // ← вот это было пропущено!

  if (location.pathname !== prevPathname) {
    setPage(1);
    setPrevPathname(location.pathname);
  }

  const { data: movies } = useGetTopMoviesQuery({ type: currentMovieType, page });

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {movies &&
          movies.items.map((movie: IFilm) => (
            <Grid key={movie.kinopoiskId} size={{ xs: 2, sm: 3, md: 3 }}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
      </Grid>
      <Stack alignItems="center" mt={5}>
        <Pagination
          count={movies && movies.totalPages}
          page={page}
          color="primary"
          size="large"
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </>
  );
}

export default MoviesListTop;
