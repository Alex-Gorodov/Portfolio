import { PageNotFound } from '../../pages/page-not-found/page-not-found';
import { HistoryRouter } from "../history-route/history-route";
import { HomePage } from '../../pages/home/home-page';
import { HelmetProvider } from 'react-helmet-async';
import browserHistory from '../../browser-history';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRoute } from '../../const';
import { store } from '../../store';
import '../../styles/style.sass';

export function App() {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory} basename="/">
        <Provider store={store}>
          <Routes>
            <Route path={AppRoute.Root} element={<HomePage/>}/>
            <Route path={AppRoute.PageNotFound} element={<PageNotFound/>}/>
          </Routes>
        </Provider>
      </HistoryRouter>
    </HelmetProvider>
  );
}
