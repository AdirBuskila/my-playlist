import React from 'react';
import {Redirect, Switch, Route } from "react-router-dom";
import {AppHeader} from './pages/AppHeader';

import { routes } from './routes';

export const App = () => {
  return (
    <div className='App'>
      <AppHeader />
      <Switch>
      <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        {routes.map((route) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </div>
  );
};
