import '../../styles/style.sass';
import { HistoryRouter } from "../history-route/history-route";
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/home/home-page';
import { HelmetProvider } from 'react-helmet-async';
import { PageNotFound } from '../../pages/page-not-found/page-not-found';

export function App() {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory} basename="/">
        <Provider store={store}>
          <Routes>
            <Route path={AppRoute.Root} element={<HomePage/>}/>
            <Route path={AppRoute.PageNotFound} element={<PageNotFound/>}/>
            <Route path={AppRoute.CV} element={<HomePage/>}/>
            {/* <Route path={AppRoute.Works} element={<CatalogPage/>}>
              <Route path={AppRoute.CatalogCreamy} element={<CatalogPage/>}></Route>
              <Route path={AppRoute.CatalogSorbet} element={<CatalogPage/>}></Route>
            </Route>
            <Route path={AppRoute.Shipping} element={<ShippingPage/>}/>
            <Route path={AppRoute.About} element={<AboutPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/> */}
          </Routes>
        </Provider>
      </HistoryRouter>
    </HelmetProvider>
  );
}
