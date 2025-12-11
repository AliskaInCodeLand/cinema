import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useGetAllMoviesQuery } from '../shared/api/kinopoiskApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import type { RootState } from './store';
import { setSearchQuery } from '../features/searchQuerySlice';
import { movieTypes } from './constans';

// const movieTypes = {
//   FILM: 'Фильм',
//   VIDEO: 'Фильм',
//   TV_SERIES: 'Сериал',
//   MINI_SERIES: 'Мини-сериал',
//   TV_SHOW: 'ТВ-Шоу',
// };

function MovieSearch() {
  const navigate = useNavigate(); // для перехода на страницу фильма
  const dispatch = useDispatch(); // для обновления Redux
  const [inputValue, setInputValue] = useState('');
  const { countries, genre, order, type, year, page, keyword } = useSelector(
    (state: RootState) => state.searchQuerySlice
  );
  const { data, isFetching } = useGetAllMoviesQuery(
    {
      countries,
      genre,
      order,
      type,
      year,
      page,
      keyword,
    },
    { skip: keyword.length < 3 }
  );

  interface Film {
    filmId: number;
    nameRu: string;
    nameEn?: string;
    year: string;
    type: keyof typeof movieTypes;
    rating?: string | null;
    posterUrlPreview?: string;
  }

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: inputValue }));
    }, 400);
    return () => clearTimeout(setTimeoutId);
  }, [inputValue]);

  return (
    <>
      <Autocomplete<Film | string, false, false, true>
        //можно вводить любой текст (freeSolo)
        freeSolo
        // Позволяет пользователю вводить текст, не выбирая из списка.
        getOptionLabel={option =>
          typeof option === 'string'
            ? option
            : `${option.nameRu} - ${movieTypes[option.type] || ''} (${option.year})`
        }
        // Массив фильмов для автодополнения.
        options={data ? data.films || '' : []}
        // Стиль через MUI: ширина 300px.
        // color="#ffffff"
        sx={{
          width: 300,
          backgroundColor: '#414141ff',
          '&:hover': {
            bgcolor: '#ffffffff',
          },
        }}
        // Кастомизация поля ввода
        renderInput={params => (
          <TextField
            // ...params — обязательные пропсы от Autocomplete.
            {...params}
            label="Поиск"
            color="primary"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {/* Добавляем индикатор загрузки справа, если isFetching === true */}
                  {isFetching ? <CircularProgress color="primary" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        // Срабатывает при любом изменении текста в поле
        onInputChange={(_, value) => {
          // Обновляем inputValue → запускается useEffect → через 400 мс обновится Redux.
          setInputValue(value);
        }}
        // Срабатывает при выборе опции из списка
        onChange={(_, value) => {
          if (typeof value !== 'string' && value?.filmId) {
            // Если value — не строка (значит, объект фильма) → переходим на его страницу.
            // сохраняем фильм в истории, чтобы MovieDetail мог его использовать без запроса.
            navigate(`/movie/${value.filmId}`, { state: { film: value } });
          }
        }}
      />
    </>
  );
}

export default MovieSearch;

{
  /* <>
            <Autocomplete<Film | string, false, false, true>
                freeSolo
                getOptionLabel={(option) =>
                typeof option === 'string'
                    ? option
                    : `${option.nameRu} - ${movieTypes[option.type] || ''} (${option.year})`
                }
                options={data ? data.items : []}
                sx={{ width: 300,
                    backgroundColor: "#3a3a3aff"
                 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search movie"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {isFetching ? (
                                    <CircularProgress color="inherit" size={20} />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />
                )}
                onInputChange={(_, value) => {
                    setInputValue(value);
                }}
                onChange={(_, value) => {
                    if (typeof value !== 'string' && value?.filmId) {
                        navigate(`/movie/${value.filmId}`, { state: { film: value } });
                    }
                }}
            />
        </> */
}
