import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './app/Layout';
import MoviesDetails from './entities/MovieDetails';
import MoviesListTop from './entities/MoviesListTop';
import PageNotFound from './entities/PageNotFound';
import { CATEGORIES } from './app/constans';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<MoviesListTop />} />
          <Route path='/top-popular-all' element={<MoviesListTop/>}/> */}
          <Route index element={<Navigate to="top-popular-all" replace />} />
          {CATEGORIES.map(el => (
            <Route key={el.url} path={el.url} element={<MoviesListTop />} />
          ))}
          <Route path="/movie/:id" element={<MoviesDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
