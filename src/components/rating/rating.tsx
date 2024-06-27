import { test, expect } from '@playwright/test';
import React from 'react';
import ReactDOM from 'react-dom';
import { Rating } from '@mui/material';

test.describe('Rating Component', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust the URL to match where your component is rendered
    await page.goto('http://localhost:3000');
  });

  test('should render stars and review count correctly', async ({ page }) => {
    const props = {
      rate: 3,
      qti: 10
    };

    await page.evaluate(({ props }) => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(
        React.createElement(Rating, props),
        container
      );
    }, { props });

    const stars = page.locator('.MuiSvgIcon-root');
    await expect(stars).toHaveCount(5);

    for (let i = 0; i < 5; i++) {
      if (i < 3) {
        await expect(stars.nth(i)).toHaveClass(/MuiStarIcon/); // Filled star
      } else {
        await expect(stars.nth(i)).toHaveClass(/MuiStarBorderIcon/); // Empty star
      }
    }

    const reviewsText = page.locator('text=(10 reviews)');
    await expect(reviewsText).toBeVisible();
  });

  test('should render all empty stars when rate is 0', async ({ page }) => {
    const props = {
      rate: 0,
      qti: 0
    };

    await page.evaluate(({ props }) => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(
        React.createElement(Rating, props),
        container
      );
    }, { props });

    const stars = page.locator('.MuiSvgIcon-root');
    await expect(stars).toHaveCount(5);

    for (let i = 0; i < 5; i++) {
      await expect(stars.nth(i)).toHaveClass(/MuiStarBorderIcon/); // Empty star
    }

    const reviewsText = page.locator('text=(0 reviews)');
    await expect(reviewsText).toBeVisible();
  });

  test('should render all filled stars when rate is 5', async ({ page }) => {
    const props = {
      rate: 5,
      qti: 20
    };

    await page.evaluate(({ props }) => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(
        React.createElement(Rating, props),
        container
      );
    }, { props });

    const stars = page.locator('.MuiSvgIcon-root');
    await expect(stars).toHaveCount(5);

    for (let i = 0; i < 5; i++) {
      await expect(stars.nth(i)).toHaveClass(/MuiStarIcon/); // Filled star
    }

    const reviewsText = page.locator('text=(20 reviews)');
    await expect(reviewsText).toBeVisible();
  });
});
