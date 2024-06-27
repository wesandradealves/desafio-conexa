import { test, expect } from '@playwright/test';

test.describe('Logo Component', () => {
  test('should render the logo with the given class name and href', async ({ page }) => {
    const className = 'custom-logo';
    const href = '/home';

    await page.setContent(`
      <div id="root"></div>
      <script type="module">
        import { render } from 'react-dom';
        import React from 'react';
        import Logo from './path-to-your-component/Logo'; // Adjust the import path
        const root = document.getElementById('root');
        render(<Logo className="${className}" href="${href}" />, root);
      </script>
    `);

    const content = page.locator(`.${className}`);
    await expect(content).toBeVisible();

    const link = content.locator('a');
    await expect(link).toHaveAttribute('href', href);

    const image = link.locator('img');
    await expect(image).toHaveAttribute('src', 'https://cdn.prod.website-files.com/613f7ca80295647d415b0d85/661e6c2947cc1675a5b3a4e2_logotipo_roxo_zencnx.svg');
    await expect(image).toHaveAttribute('alt', 'Logo Zenklub');
    await expect(image).toHaveAttribute('loading', 'lazy');
    await expect(image).toHaveAttribute('width', '127');
    await expect(image).toHaveAttribute('height', '32');
  });

  test('should navigate to the correct href when logo is clicked', async ({ page }) => {
    const className = 'custom-logo';
    const href = '/home';

    await page.setContent(`
      <div id="root"></div>
      <script type="module">
        import { render } from 'react-dom';
        import React from 'react';
        import Logo from './path-to-your-component/Logo'; // Adjust the import path
        const root = document.getElementById('root');
        render(<Logo className="${className}" href="${href}" />, root);
      </script>
    `);

    const link = page.locator(`.${className} a`);
    await link.click();

    // Check if the URL has changed to the provided href
    await expect(page).toHaveURL(href);
  });
});
