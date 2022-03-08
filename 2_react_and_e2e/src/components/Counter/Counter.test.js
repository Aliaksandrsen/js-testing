import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';

import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('Counter test', () => {
  test('router', async () => {
    const { getByTestId } = render(
      renderTestApp(null, {
        route: '/',
        initialState: {
          counter: { value: 10 },
        },
      })
    );

    const incrementBtn = screen.getByTestId('increment-btn');
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
});
