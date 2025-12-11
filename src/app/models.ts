export type Types = 'FILM' | 'VIDEO' | 'TV_SERIES' | 'MINI_SERIES' | 'TV_SHOW';

export interface IFilm {
  kinopoiskId: number;
  nameRu: string;
  nameEn: 'The Avengers';
  nameOriginal: 'The Avengers';
  countries: Country[];
  genres: Genere[];
  ratingKinopoisk: number;
  ratingImbd: number;
  year: string;
  type: Types;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface Country {
  country: string;
}

export interface Genere {
  genre: string;
}
