import { test, expect } from '@playwright/test';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from '@/app/page';
import SearchProvider from '@/context';
import DataProvider from '@/context/data';

test.describe('Home Component', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust the URL to match where your component is rendered
    await page.goto('http://localhost:3000');
  });

  test('should render profile cards based on professionals data', async ({ page }) => {
    const professionalsData = [
      { name: 'John Doe', activity: { name: 'Therapist' }, id: 1 },
      { name: 'Jane Smith', activity: { name: 'Counselor' }, id: 2 }
    ];

    await page.exposeFunction('mockSearchProvider', () => ({ keywords: '' }));
    await page.exposeFunction('mockDataProvider', () => ({ professionals: professionalsData }));

    await page.evaluate(() => {
      const SearchProviderMock = (props) => (
        React.createElement(SearchProvider.Provider, { value: window.mockSearchProvider() }, props.children)
      );
      const DataProviderMock = (props) => (
        React.createElement(DataProvider.Provider, { value: window.mockDataProvider() }, props.children)
      );

      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(
        React.createElement(SearchProviderMock, null,
          React.createElement(DataProviderMock, null,
            React.createElement(Home, null)
          )
        ),
        container
      );
    });

    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(2);
  });

  test('should filter profile cards based on search keywords', async ({ page }) => {
    const professionalsData = [
      { name: 'John Doe', activity: { name: 'Therapist' }, id: 1 },
      { name: 'Jane Smith', activity: { name: 'Counselor' }, id: 2 }
    ];

    await page.exposeFunction('mockSearchProvider', (keywords) => ({ keywords }));
    await page.exposeFunction('mockDataProvider', () => ({ professionals: professionalsData }));

    await page.evaluate((keywords) => {
      const SearchProviderMock = (props) => (
        React.createElement(SearchProvider.Provider, { value: window.mockSearchProvider(keywords) }, props.children)
      );
      const DataProviderMock = (props) => (
        React.createElement(DataProvider.Provider, { value: window.mockDataProvider() }, props.children)
      );

      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(
        React.createElement(SearchProviderMock, null,
          React.createElement(DataProviderMock, null,
            React.createElement(Home, null)
          )
        ),
        container
      );
    }, 'John');

    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(1);
    await expect(profileCards.first().locator('text=John Doe')).toBeVisible();
  });

  test('should show all profile cards when search keywords are cleared', async ({ page }) => {
    const professionalsData = [
      { name: 'John Doe', activity: { name: 'Therapist' }, id: 1 },
      { name: 'Jane Smith', activity: { name: 'Counselor' }, id: 2 }
    ];

    await page.exposeFunction('mockSearchProvider', (keywords) => ({ keywords }));
    await page.exposeFunction('mockDataProvider', () => ({ professionals: professionalsData }));

    await page.evaluate((keywords) => {
      const SearchProviderMock = (props) => (
        React.createElement(SearchProvider.Provider, { value: window.mockSearchProvider(keywords) }, props.children)
      );
      const DataProviderMock = (props) => (
        React.createElement(DataProvider.Provider, { value: window.mockDataProvider() }, props.children)
      );

      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(
        React.createElement(SearchProviderMock, null,
          React.createElement(DataProviderMock, null,
            React.createElement(Home, null)
          )
        ),
        container
      );
    }, '');

    const profileCards = page.locator('.profile-card');
    await expect(profileCards).toHaveCount(2);
  });
});
