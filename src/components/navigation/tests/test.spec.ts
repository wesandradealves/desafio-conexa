import { test, expect } from '@playwright/test';
import React from 'react';
import ReactDOM from 'react-dom';
import AppBreadcrumbs from '@/components/breadcrumbs/breadcrumbs';

test.describe('AppBreadcrumbs Component', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust the URL to match where your component is rendered
    await page.goto('http://localhost:3000');
  });

  test('should render breadcrumbs with given class name and title', async ({ page }) => {
    const className = 'custom-breadcrumbs';
    const title = 'Current Page';

    await page.evaluate(({ className, title }) => {
      const props = { className, title };
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(React.createElement(AppBreadcrumbs, props), container);
    }, { className, title });

    const breadcrumbs = page.locator(`.${className}`);
    await expect(breadcrumbs).toBeVisible();
    await expect(breadcrumbs.locator('text=Página Inicial')).toBeVisible();
    await expect(breadcrumbs.locator(`text=${title}`)).toBeVisible();
  });

  test('should navigate to the homepage when "Página Inicial" link is clicked', async ({ page }) => {
    const className = 'custom-breadcrumbs';
    const title = 'Current Page';

    await page.evaluate(({ className, title }) => {
      const props = { className, title };
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(React.createElement(AppBreadcrumbs, props), container);
    }, { className, title });

    const homeLink = page.locator('text=Página Inicial');
    await homeLink.click();

    // Check if the URL has changed to the homepage
    await expect(page).toHaveURL('/');
  });
});
