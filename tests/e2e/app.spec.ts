import { test, expect } from '@playwright/test';

test('login page renders invite-only note', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByText('Invite-only auth enabled')).toBeVisible();
});

test('dashboard renders KPI title', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.getByText('Home KPI Dashboard')).toBeVisible();
});

test('reviews flow screen renders', async ({ page }) => {
  await page.goto('/sales/reviews');
  await expect(page.getByText('Sales / Reviews')).toBeVisible();
});

test('leads flow renders', async ({ page }) => {
  await page.goto('/sales/leads');
  await expect(page.getByText('Sales / Lead Generator')).toBeVisible();
});

test('rom create/search/update screens render', async ({ page }) => {
  await page.goto('/sales/rom/new');
  await expect(page.getByText('ROM Generator / Create New')).toBeVisible();
  await page.goto('/sales/rom/search');
  await expect(page.getByText('ROM Generator / Search ROM')).toBeVisible();
  await page.goto('/sales/rom/ROM-001');
  await expect(page.getByText('ROM Generator / Update ROM')).toBeVisible();
});

test('pricing item update route renders', async ({ page }) => {
  await page.goto('/sales/rom/update-item');
  await expect(page.getByText('ROM Generator / Update Item')).toBeVisible();
});

test('rbac helper behavior documented route visibility', async ({ page }) => {
  await page.goto('/sales/rom/update-item');
  await expect(page.getByText('Admin-only pricing item update')).toBeVisible();
});
