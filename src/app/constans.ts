export interface Category {
  title: string;
  url: string;
  icon?: string;
  value: string;
}

export const movieTypes = {
  FILM: 'Фильм',
  VIDEO: 'Фильм',
  TV_SERIES: 'Сериал',
  MINI_SERIES: 'Мини-сериал',
  TV_SHOW: 'ТВ-Шоу',
};

export const CATEGORIES: Category[] = [
  {
    title: 'ТОП популярных (все)',
    icon: 'AutoAwesome',
    url: '/top-popular-all',
    value: 'TOP_POPULAR_ALL',
  },
  {
    title: 'ТОП популярных фильмов',
    icon: 'Movie',
    url: '/popular',
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'ТОП 250 сериалов',
    icon: 'Tv',
    url: '/top-250-tv',
    value: 'TOP_250_TV_SHOWS',
  },
  {
    title: 'ТОП 250 фильмов',
    icon: 'LocalMovies',
    url: '/top-250-movies',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Фильмы про вампиров',
    icon: 'Bloodtype',
    url: '/vampire',
    value: 'VAMPIRE_THEME',
  },
  {
    title: 'Фильмы по комиксам',
    icon: 'ComicBook',
    url: '/book',
    value: 'COMICS_THEME',
  },
  {
    title: 'Скоро в прокате',
    icon: 'Upcoming',
    url: '/coming-soon',
    value: 'CLOSES_RELEASES',
  },
  {
    title: 'Семейные фильмы',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Оскароносные 2021',
    icon: 'EmojiEvents',
    url: '/oscar-2021',
    value: 'OSKAR_WINNERS_2021',
  },
  {
    title: 'Фильмы про любовь',
    icon: 'Favorite',
    url: '/love',
    value: 'LOVE_THEME',
  },
  {
    title: 'Фильмы про зомби',
    icon: 'BugReport',
    url: '/zombies',
    value: 'ZOMBIE_THEME',
  },
  {
    title: 'Фильмы-катастрофы',
    icon: 'ReportProblem',
    url: '/catastrophes',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Мультфильмы для детей',
    icon: 'ChildCare',
    url: '/kids-animation',
    value: 'KIDS_ANIMATION_THEME',
  },
  {
    title: 'Популярные сериалы',
    icon: 'Whatshot',
    url: '/popular-series',
    value: 'POPULAR_SERIES',
  },
];
