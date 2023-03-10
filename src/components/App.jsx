import { Outlet, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Utils/Loader';

const Navi = lazy(() => import('./Nav/Nav'));
const Home = lazy(() => import('./Pages/Home'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('./Movie/MovieDetail'));
const SearchMovie = lazy(() => import('./Pages/SearchMovie'));

const MainLayout = () => {
  return (
    <>
      <Navi />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovie />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="trending" />
      </Route>
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
}