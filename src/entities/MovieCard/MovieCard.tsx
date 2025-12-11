import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import type { IFilm } from '../../app/models';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

type Props = {
  movie: IFilm;
};

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
    color: 'inherit',
  },
});

function MovieCard({ movie }: Props) {
  const raiting = Math.ceil(((movie.ratingKinopoisk || movie.ratingImbd) * 5) / 10);

  return (
    <Card sx={{ minHeight: '100%' }}>
      <StyledLink to={`/movie/${movie.kinopoiskId}`}>
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia
            component="img"
            height="405"
            image={movie.posterUrlPreview}
            alt={movie.nameRu}
          />
          <CardContent>
            <Stack spacing={2}>
              <Stack
                spacing={2}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <Typography component="div">{movie.nameRu || movie.nameEn}</Typography>
                <Typography component="div">{movie.year}</Typography>
              </Stack>
              <Typography component="div">
                {raiting > 0 ? (
                  <Rating name="half-rating-read" defaultValue={raiting} precision={0.5} readOnly />
                ) : (
                  'Фильм ждёт вашей оценки!'
                )}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </StyledLink>
    </Card>
  );
}

export default MovieCard;
