import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { MainPage, NewsPostPage, NotFoundPage } from './pages';
export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/news/:id' component={NewsPostPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
