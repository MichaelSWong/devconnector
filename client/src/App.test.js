import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import Dashboard from './components/dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import Profile from './components/profile/Profile';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // /Login/ /<  >/ use for partial match
    expect(screen.getByText(/Login/)).toBeInTheDocument();

    // show all the selectable roles
    //screen.getByRole('');

    // asserting element isn't there use queryBy
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // asserting element isn't there use queryBy
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});

describe('DashBoard', () => {
  test('renders Dashboard component', async () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    // expect(screen.queryByText(/Welcome/)).toBeNull();
    // expect(await screen.findByText(/Welcome/)).toBeInTheDocument();

    screen.debug();
  });
});
