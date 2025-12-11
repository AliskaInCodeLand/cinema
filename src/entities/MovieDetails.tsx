import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../shared/api/kinopoiskApi';
import { Box, Chip, Rating, Stack, Typography } from '@mui/material';
import type { Country, Genere } from '../app/models';
import { movieTypes } from '../app/constans';

function MoviesDetails() {
  const { id } = useParams();
  const { data: movie } = useGetMovieByIdQuery(id);

  console.log(movie);
  const raiting = movie?.ratingKinopoisk ? (movie.ratingKinopoisk * 5) / 10 : null;
  const typeMovie = movie
    ? (movieTypes as Record<string, string>)[movie.type] || 'Неизвестный тип'
    : '';

  return (
    <>
      {movie && (
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Box>
            <img
              srcSet={`${movie.posterUrlPreview}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${movie.posterUrlPreview}?w=248&fit=crop&auto=format`}
              alt={movie.nameRu || movie.nameEn}
              loading="lazy"
            />
          </Box>
          <Stack spacing={2}>
            <Typography component="h1" sx={{ fontSize: 28, fontWeight: 'bold' }}>
              {movie.nameRu || movie.nameEn}
            </Typography>
            <Typography component="div">
              {typeMovie} {movie.year}
            </Typography>
            <Stack direction="row" spacing={2}>
              {movie.countries.length === 1 ? 'Страна: ' : 'Страны:'}
              {movie &&
                movie.countries.map((country: Country) => (
                  <Typography component="div">{country.country}</Typography>
                ))}
            </Stack>
            {raiting && (
              <Typography component="div">
                <Rating name="half-rating-read" value={raiting} precision={0.5} readOnly />
              </Typography>
            )}
            <Stack direction="row" spacing={1}>
              {movie &&
                movie.genres.map((genre: Genere) => (
                  <Chip
                    label={genre.genre}
                    sx={{
                      background: '#E50000',
                    }}
                    color="primary"
                  />
                ))}
            </Stack>
          </Stack>

          <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            {movie?.description}
          </Box>
        </Stack>
      )}
    </>
  );
}

export default MoviesDetails;
