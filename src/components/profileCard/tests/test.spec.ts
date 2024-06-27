import { test, expect } from '@playwright/test';
import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from '../profileCard';
import { ProfessionalsTypo } from '@/types';
import SpinnerProvider from '@/context/spinner';

test.describe('ProfileCard Component', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust the URL to match where your component is rendered
    await page.goto('http://localhost:3000');
  });

  test('should render profile card with given props', async ({ page }) => {
    const props: ProfessionalsTypo = {
      data: {
        name: 'John Doe',
        profile: 'https://example.com/profile.jpg',
        activity: { name: 'Therapist' },
        address: { country: 'USA' },
        testimonials: [{ rating: 4 }, { rating: 5 }],
        attendant: { price: 100, time: 60 },
        description: 'Experienced therapist',
        id: '1',
      },
      className: 'custom-profile-card',
      anchor: true,
    };

    await page.evaluate(({ props }) => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(
        <SpinnerProvider>
          <ProfileCard {...props} />
        </SpinnerProvider>,
        container
      );
    }, { props });

    const profileCard = page.locator(`.profile-card.custom-profile-card`);
    await expect(profileCard).toBeVisible();

    const name = profileCard.locator('text=John Doe');
    await expect(name).toBeVisible();

    const role = profileCard.locator('text=Therapist | USA');
    await expect(role).toBeVisible();

    const rating = profileCard.locator('text=4.5'); // Assuming Rating component shows average rating
    await expect(rating).toBeVisible();

    const price = profileCard.locator('text=R$100 / 60 minutos');
    await expect(price).toBeVisible();

    const description = profileCard.locator('text=Experienced therapist');
    await expect(description).toBeVisible();
  });

  test('should navigate to professional page when "Agendar" button is clicked', async ({ page }) => {
    const props: ProfessionalsTypo = {
      data: {
        name: 'John Doe',
        profile: 'https://example.com/profile.jpg',
        activity: { name: 'Therapist' },
        address: { country: 'USA' },
        testimonials: [{ rating: 4 }, { rating: 5 }],
        attendant: { price: 100, time: 60 },
        description: 'Experienced therapist',
        id: '1',
      },
      className: 'custom-profile-card',
      anchor: true,
    };

    await page.evaluate(({ props }) => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      ReactDOM.render(
        <SpinnerProvider>
          <ProfileCard {...props} />
        </SpinnerProvider>,
        container
      );
    }, { props });

    const button = page.locator('text=Agendar');
    await button.click();

    // Check if the URL has changed to the professional page
    await expect(page).toHaveURL('/professional/1');
  });
});
