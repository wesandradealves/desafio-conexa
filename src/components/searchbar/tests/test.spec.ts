import { test, expect } from '@playwright/test';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../searchbar';
import { searchbarTypo } from '../typo';

test.describe('SearchBar Component', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust the URL to match where your component is rendered
    await page.goto('http://localhost:3000');
  });

  test('should render the search bar with placeholder', async ({ page }) => {
    await page.evaluate(() => {
      const props: searchbarTypo = {};
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(<SearchBar {...props} />, container);
    });

    const searchBar = page.locator('#filled-search');
    await expect(searchBar).toBeVisible();
    await expect(searchBar).toHaveAttribute('placeholder', 'Busca por nome ou profissão');
  });

  test('should call onChange prop when input value changes', async ({ page }) => {
    const onChangeMock = jest.fn();
    await page.exposeFunction('onChangeMock', onChangeMock);

    await page.evaluate(() => {
      const props: searchbarTypo = {
        onChange: (value) => (window as any).onChangeMock(value),
      };
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(<SearchBar {...props} />, container);
    });

    const searchBar = page.locator('#filled-search');
    await searchBar.fill('test value');

    // Verify the onChange callback was called with the correct value
    expect(onChangeMock).toHaveBeenCalledWith('test value');
  });

  test('should navigate to home page if pathname contains "professional" and input value changes', async ({ page }) => {
    // Mock the pathname to include "professional"
    await page.evaluate(() => {
      Object.defineProperty(window, 'location', {
        value: { pathname: '/professional/some-path' },
        writable: true,
      });
    });

    await page.evaluate(() => {
      const props: searchbarTypo = {};
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(<SearchBar {...props} />, container);
    });

    const searchBar = page.locator('#filled-search');
    await searchBar.fill('test value');

    // Check if the URL has changed to the home page
    await expect(page).toHaveURL('/');
  });
});
